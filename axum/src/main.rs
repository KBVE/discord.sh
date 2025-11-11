mod core;
mod astro;

mod transports {
    pub mod https;
    pub mod tcp;
    pub mod graph;
}

use std::sync::Arc;
use std::time::Duration;
use core::{new_bus, run_app};
use axum::{
    response::IntoResponse,
    routing::get,
    Json, Router,
};
use tokio::net::TcpListener;
use tower::ServiceBuilder;
use tracing::{info, warn, error};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[cfg(feature = "jemalloc")]
mod allocator {
    #[cfg(not(target_env = "msvc"))]
    use tikv_jemallocator::Jemalloc;
    #[cfg(not(target_env = "msvc"))]
    #[global_allocator]
    static GLOBAL: Jemalloc = Jemalloc;
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {

    // ================
    //      Tracing
    // ================
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| {
                    format!("{}=info,tower_http=debug", env!("CARGO_CRATE_NAME")).into()
                })
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Bus
    let (bus, rx) = new_bus(1024);
    tokio::spawn(run_app(rx));

    // Tokio
    let http = tokio::spawn(transports::https::serve(bus.clone()));


    // Print
    info!("StarYo v{}", env!("CARGO_PKG_VERSION"));

     tokio::select! {
        _ = http => {},
        //  _ = tcp  => {},
        //  _ = grpc => {},
        _ = tokio::signal::ctrl_c() => {
            tracing::info!("shutdown signal received");
        }
    }

    Ok(())

}