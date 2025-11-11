use tokio::sync::{mpsc, oneshot};

#[derive(Debug)]
pub enum AppCmd {
    Hello { name: String, reply: oneshot::Sender<String> },
    Chat  { room: String, text: String },
}

#[derive(Clone)]
pub struct AppBus {
    pub tx: mpsc::Sender<AppCmd>,
}

pub fn new_bus(cap: usize) -> (AppBus, mpsc::Receiver<AppCmd>) {
    let (tx, rx) = mpsc::channel(cap);
    (AppBus { tx }, rx)
}

pub async fn run_app(mut rx: mpsc::Receiver<AppCmd>) {
    while let Some(cmd) = rx.recv().await {
        match cmd {
            AppCmd::Hello { name, reply } => {
                let _ = reply.send(format!("Hello, {name}!"));
            }
            AppCmd::Chat { room, text } => {
                tracing::info!(%room, %text, "chat");
            }
        }
    }
}