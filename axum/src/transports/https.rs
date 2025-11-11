use anyhow::Result;
use std::{net::SocketAddr, time::Duration};

use axum::{
    extract::{
        State,
        ws::{Message, WebSocket, WebSocketUpgrade},
    },
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use futures_util::StreamExt;
use serde::{Deserialize, Serialize};
use tokio::net::TcpListener;
use tower::ServiceBuilder;
use tower_http::{
    compression::CompressionLayer,
    cors::CorsLayer,
    limit::RequestBodyLimitLayer,
    trace::{DefaultMakeSpan, TraceLayer},
};
use tracing::{error, info, Level};

use crate::core::{AppBus, AppCmd};

/* ------------------------------- serve() -------------------------------- */

pub async fn serve(bus: AppBus) -> Result<()> {
    // Env-configurable bind
    let host = std::env::var("HTTP_HOST").unwrap_or_else(|_| "0.0.0.0".into());
    let port: u16 = std::env::var("HTTP_PORT").ok().and_then(|s| s.parse().ok()).unwrap_or(4321);
    let addr: SocketAddr = format!("{host}:{port}").parse()?;

    // Socket tuning (nodelay, keepalive, reuseaddr)
    let listener = tuned_listener(addr)?;

    info!("HTTP/WS listening on http://{addr}");

    // Build app
    let app = router(bus);

    // Axum/Hyper tuning
    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await?;

    Ok(())
}


/* ------------------------------- router() ------------------------------- */

fn router(bus: crate::core::AppBus) -> axum::Router {
    // bring trait for .and() on compression predicates
    use tower_http::compression::Predicate as _;

    let max_inflight: usize = (num_cpus::get().max(1) * 1024) as usize;

    // Static asset configuration
    let static_config = crate::astro::StaticConfig::default();

    // Compress only when default rules allow AND body > 1 KiB
    // NOTE: Static assets are pre-compressed, so this only applies to dynamic routes
    let compression = tower_http::compression::CompressionLayer::new().compress_when(
        tower_http::compression::predicate::DefaultPredicate::new()
            .and(tower_http::compression::predicate::SizeAbove::new(1024)),
    );

    // Build middleware stack with HandleErrorLayer for fallible services
    let middleware = tower::ServiceBuilder::new()
        // Trace layer (outermost) - must be last to avoid Default bound issues
        .layer(
            tower_http::trace::TraceLayer::new_for_http().make_span_with(
                tower_http::trace::DefaultMakeSpan::new().level(tracing::Level::INFO),
            ),
        )
        // CORS layer
        .layer(tower_http::cors::CorsLayer::permissive())
        // Compression layer (skipped for precompressed static assets)
        .layer(compression)
        // Handle errors from fallible middleware BEFORE applying them
        .layer(axum::error_handling::HandleErrorLayer::new(
            |err: tower::BoxError| async move {
                if err.is::<tower::timeout::error::Elapsed>() {
                    (axum::http::StatusCode::REQUEST_TIMEOUT, "request timed out")
                } else if err.is::<tower::load_shed::error::Overloaded>() {
                    (axum::http::StatusCode::SERVICE_UNAVAILABLE, "service overloaded")
                } else {
                    tracing::warn!(error = %err, "middleware error");
                    (axum::http::StatusCode::INTERNAL_SERVER_ERROR, "internal server error")
                }
            },
        ))
        // Fallible middleware layers (innermost)
        .timeout(std::time::Duration::from_secs(10))
        .concurrency_limit(max_inflight)
        .load_shed()
        // Request body limit (after fallible layers so it doesn't need Default)
        .layer(tower_http::limit::RequestBodyLimitLayer::new(1 * 1024 * 1024));

    // Build router with priority:
    // 1. Static assets (highest priority, no state, precompressed)
    // 2. Dynamic API routes (with state)
    // 3. Fallback to Askama templates (future)
    let static_router = crate::astro::build_static_router(&static_config);

    // Dynamic routes with state
    // Note: "/" is handled by static index.html from Astro
    let dynamic_router = axum::Router::new()
        .route("/health", axum::routing::get(health))
        .route("/echo", axum::routing::post(echo))
        .route("/ws", axum::routing::get(ws_upgrade))
        // Optional: Add dynamic Askama routes
        // .route("/dashboard", axum::routing::get(crate::astro::askama::private_dashboard))
        // .route("/page/*path", axum::routing::get(crate::astro::askama::dynamic_page_handler))
        .with_state(bus);

    // Merge static and dynamic routers, then apply middleware
    static_router
        .merge(dynamic_router)
        // Optional: Add fallback for 404s or catch-all dynamic rendering
        // .fallback(crate::astro::askama::fallback_handler)
        .layer(middleware)
}



/* ------------------------------- Handlers ------------------------------- */

async fn root() -> impl IntoResponse {
    "kbve-staryo online"
}

async fn health() -> impl IntoResponse {
    "OK"
}

#[derive(Deserialize)]
struct EchoIn {
    name: String,
}

#[derive(Serialize)]
struct EchoOut {
    message: String,
}

async fn echo(State(bus): State<AppBus>, Json(input): Json<EchoIn>) -> impl IntoResponse {
    use tokio::sync::oneshot;
    let (tx, rx) = oneshot::channel();
    let _ = bus.tx.send(AppCmd::Hello { name: input.name, reply: tx }).await;
    let message = rx.await.unwrap_or_else(|_| "unavailable".into());
    Json(EchoOut { message })
}

/* ---------------------------- WebSocket path ---------------------------- */

async fn ws_upgrade(ws: WebSocketUpgrade, State(bus): State<AppBus>) -> impl IntoResponse {
    // Set sizes to defend allocations; tune to your needs
    ws.max_message_size(1 << 20) // 1 MiB per message
        .max_frame_size(1 << 20)
        .on_upgrade(move |socket| ws_loop(socket, bus))
}

async fn ws_loop(mut socket: WebSocket, bus: AppBus) {
    use tokio::sync::oneshot;

    // Initial small write (avoid large strings)
    let _ = socket.send(Message::Text("welcome".into())).await;

    while let Some(Ok(msg)) = socket.next().await {
        match msg {
            Message::Text(name) => {
                let (tx, rx) = oneshot::channel();
                // Convert Utf8Bytes to String
                let name_str = name.to_string();
                if bus.tx.send(AppCmd::Hello { name: name_str, reply: tx }).await.is_err() {
                    let _ = socket.send(Message::Text("busy".into())).await;
                    continue;
                }
                match rx.await {
                    Ok(reply) => {
                        // Convert String to Utf8Bytes
                        let _ = socket.send(Message::Text(reply.into())).await;
                    }
                    Err(e) => {
                        error!(err=?e, "ws oneshot recv failed");
                        let _ = socket.send(Message::Text("error".into())).await;
                    }
                }
            }
            Message::Binary(bytes) => {
                // Zero-copy echo for now
                let _ = socket.send(Message::Binary(bytes)).await;
            }
            Message::Ping(p) => { let _ = socket.send(Message::Pong(p)).await; }
            Message::Close(_) => break,
            _ => {}
        }
    }
}

/* ----------------------------- Socket tuning ---------------------------- */

fn tuned_listener(addr: SocketAddr) -> Result<TcpListener> {
    use socket2::{Socket, Domain, Type, Protocol};
    let domain = match addr { SocketAddr::V4(_) => Domain::IPV4, SocketAddr::V6(_) => Domain::IPV6 };
    let socket = Socket::new(domain, Type::STREAM, Some(Protocol::TCP))?;

    // Reuseaddr to speed restarts & readiness flips
    socket.set_reuse_address(true)?;
    // Keep connections alive (helps load balancers too)
    socket.set_keepalive(true)?;
    // Linux/Unix keepalive intervals (best effort)
    #[cfg(any(target_os = "linux", target_os = "android"))]
    {
        use socket2::TcpKeepalive;
        let ka = TcpKeepalive::new().with_time(Duration::from_secs(30)).with_interval(Duration::from_secs(10));
        let _ = socket.set_tcp_keepalive(&ka);
    }

    // Bind + listen
    socket.bind(&addr.into())?;
    socket.listen(1024)?;

    // Convert to Tokio listener
    let std_listener = std::net::TcpListener::from(socket);
    std_listener.set_nonblocking(true)?;
    // Note: TCP_NODELAY is set per-connection by hyper/axum automatically
    Ok(TcpListener::from_std(std_listener)?)
}

/* ----------------------------- Shutdown hook ---------------------------- */

async fn shutdown_signal() {
    let _ = tokio::signal::ctrl_c().await;
}
