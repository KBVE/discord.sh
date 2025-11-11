pub mod askama;

use axum::Router;
use tower_http::services::{ServeDir, ServeFile};
use std::path::PathBuf;

/// Configuration for static asset serving
pub struct StaticConfig {
    /// Base directory where Astro builds output (e.g., "axum/templates/dist")
    pub base_dir: PathBuf,
    /// Whether to serve precompressed files (.gz)
    pub precompressed: bool,
}

impl Default for StaticConfig {
    fn default() -> Self {
        Self {
            base_dir: PathBuf::from("templates/dist"),
            precompressed: true,
        }
    }
}

/// Builds the complete Astro static routing layer
/// Priority order:
/// 1. Static asset directories (_astro, assets, chunks, images, pagefind)
/// 2. Static HTML files from Astro build
/// 3. Falls back to parent router (dynamic routes)
pub fn build_static_router(config: &StaticConfig) -> Router {
    let base = &config.base_dir;
    let precompressed = config.precompressed;

    // Build ServeDir services for each static directory
    let astro_service = if precompressed {
        ServeDir::new(base.join("_astro")).precompressed_gzip()
    } else {
        ServeDir::new(base.join("_astro"))
    };

    let assets_service = if precompressed {
        ServeDir::new(base.join("assets")).precompressed_gzip()
    } else {
        ServeDir::new(base.join("assets"))
    };

    let chunks_service = if precompressed {
        ServeDir::new(base.join("chunks")).precompressed_gzip()
    } else {
        ServeDir::new(base.join("chunks"))
    };

    // Images (WebP, PNG, JPG, etc.) are already compressed - skip gzip
    let images_service = ServeDir::new(base.join("images"));

    let pagefind_service = if precompressed {
        ServeDir::new(base.join("pagefind")).precompressed_gzip()
    } else {
        ServeDir::new(base.join("pagefind"))
    };

    // Fallback service for all other files (HTML pages, etc.)
    let fallback_service = if precompressed {
        ServeDir::new(base).precompressed_gzip().append_index_html_on_directories(true)
    } else {
        ServeDir::new(base).append_index_html_on_directories(true)
    };

    Router::new()
        // Static asset directories (highest priority, no dynamic state)
        .nest_service("/_astro", astro_service)
        .nest_service("/assets", assets_service)
        .nest_service("/chunks", chunks_service)
        .nest_service("/images", images_service)
        .nest_service("/pagefind", pagefind_service)
        // Fallback to serve all other static files (HTML pages)
        .fallback_service(fallback_service)
}

/// Optional: Helper for serving a specific static file (e.g., index.html, favicon.ico)
pub fn static_file_service(path: PathBuf, precompressed: bool) -> ServeFile {
    let service = ServeFile::new(path);

    if precompressed {
        service.precompressed_gzip()
    } else {
        service
    }
}
