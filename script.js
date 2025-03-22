async function fetchVideoDetails() {
    let url = document.getElementById("video-url").value;
    if (!url) {
        alert("Please enter a YouTube URL");
        return;
    }

    let response = await fetch(`https://your-backend.onrender.com/info?url=${encodeURIComponent(url)}`);
    let data = await response.json();

    document.getElementById("video-details").innerHTML = `
        <h2>${data.title}</h2>
        <img src="${data.thumbnail}" width="300">
        <button onclick="downloadVideo('${data.video_url}')">Download</button>
    `;
}

function downloadVideo(url) {
    window.location.href = url;
}
