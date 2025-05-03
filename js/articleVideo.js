document.querySelectorAll('.article__chapter-video-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
        const video = overlay.querySelector('video');

        if (video) {
            const source = video.querySelector('source.article__chapter-video');

            if (source) {
                video.pause();
                video.currentTime = 0;

                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            }
        }
    });
});

function handleFullscreenExit() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        document.querySelectorAll('video').forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

document.addEventListener('fullscreenchange', handleFullscreenExit);
document.addEventListener('webkitfullscreenchange', handleFullscreenExit);
document.addEventListener('msfullscreenchange', handleFullscreenExit);