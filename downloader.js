function downloadStub() {
  const url = document.getElementById("download-url").value;
  const status = document.getElementById("download-status");
  if (!url) {
    status.textContent = "❌ Please enter a URL.";
    return;
  }
  status.textContent = "⚡ Downloader backend required. (Hook this up to yt-dlp server)";
}

