use askama::Template;
use axum::{
    extract::Path,
    http::StatusCode,
    response::{Html, IntoResponse, Response},
};
use std::borrow::Cow;

// ============================================================================
// Askama Templates
// ============================================================================

/// Main template for dynamic content with Astro-like structure
#[derive(Template)]
#[template(path = "askama/index.html")]
pub struct AstroTemplate<'a> {
    pub content: &'a str,
    pub path: &'a str,
    pub title: &'a str,
    pub description: &'a str,
}

impl<'a> AstroTemplate<'a> {
    pub fn new(
        content: &'a str,
        path: &'a str,
        title: &'a str,
        description: &'a str,
    ) -> Self {
        Self {
            content,
            path,
            title,
            description,
        }
    }
}

// ============================================================================
// Template Response Helper
// ============================================================================

/// Helper to render Askama templates with proper error handling
pub struct TemplateResponse<T: Template>(pub T);

impl<T: Template> IntoResponse for TemplateResponse<T> {
    fn into_response(self) -> Response {
        match self.0.render() {
            Ok(html) => Html(html).into_response(),
            Err(err) => {
                tracing::error!(error = %err, "template rendering failed");
                (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    "Failed to render template",
                )
                    .into_response()
            }
        }
    }
}

// ============================================================================
// Dynamic Handlers
// ============================================================================

/// Example dynamic route handler using Askama
/// This would be called when static files don't exist
pub async fn dynamic_page_handler(Path(path): Path<String>) -> Response {
    // Example: Load content from database, file, or generate dynamically
    let content = format!("Dynamic content for: {}", path);

    let template = AstroTemplate::new(
        &content,
        &path,
        "Dynamic Page",
        "Server-rendered dynamic content",
    );

    TemplateResponse(template).into_response()
}

/// Fallback handler for 404s or dynamic content
pub async fn fallback_handler() -> Response {
    let template = AstroTemplate::new(
        "<h1>Page Not Found</h1><p>The requested page does not exist.</p>",
        "/404",
        "404 - Not Found",
        "Page not found",
    );

    (StatusCode::NOT_FOUND, TemplateResponse(template)).into_response()
}

// ============================================================================
// Example: Private Dashboard Handler
// ============================================================================

/// Example of a protected route with dynamic data
/// You would add auth middleware to this in production
pub async fn private_dashboard() -> Response {
    // In production, you'd:
    // 1. Extract user from session/JWT
    // 2. Query database for user-specific data
    // 3. Render template with private data

    let user_data = r#"
        <div class="dashboard">
            <h1>Welcome to Your Dashboard</h1>
            <p>This content is dynamically rendered with private data.</p>
        </div>
    "#;

    let template = AstroTemplate::new(
        user_data,
        "/dashboard",
        "Dashboard",
        "Your private dashboard",
    );

    TemplateResponse(template).into_response()
}
