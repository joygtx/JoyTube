function downloadAudio() {
    let url = document.getElementById("video-url").value;
    let quality = document.getElementById("quality").value;

    if (!url) {
        alert("Please enter a YouTube URL!");
        return;
    }

    fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url, quality: quality })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            let downloadLink = `/file/${encodeURIComponent(data.file)}`;
            window.location.href = downloadLink;
        }
    })
    .catch(error => console.error("Error:", error));
}
