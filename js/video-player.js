document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('moviePlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    // Load movie from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieFile = urlParams.get('movie');
    if (movieFile) {
        document.getElementById('videoSource').src = `videos/${movieFile}`;
        videoPlayer.load();
    }

    playPauseBtn.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });

    volumeSlider.addEventListener('input', () => {
        videoPlayer.volume = volumeSlider.value;
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
});