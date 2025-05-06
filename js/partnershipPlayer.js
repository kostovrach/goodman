document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.useful-video');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const muteBtn = document.querySelector('.mute-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');

    function initControls() {
        if (video.muted) {
            muteBtn.classList.add('icon-mute');
            muteBtn.classList.remove('icon-unmute');
        } else {
            muteBtn.classList.add('icon-unmute');
            muteBtn.classList.remove('icon-mute');
        }
        
        if (video.paused) {
            playPauseBtn.classList.add('icon-play');
            playPauseBtn.classList.remove('icon-pause');
        } else {
            playPauseBtn.classList.add('icon-pause');
            playPauseBtn.classList.remove('icon-play');
        }
    }

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseBtn.classList.replace('icon-play', 'icon-pause');
        } else {
            video.pause();
            playPauseBtn.classList.replace('icon-pause', 'icon-play');
        }
    }

    function toggleMute() {
        video.muted = !video.muted;
        if (video.muted) {
            muteBtn.classList.replace('icon-unmute', 'icon-mute');
        } else {
            muteBtn.classList.replace('icon-mute', 'icon-unmute');
        }
    }

    playPauseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePlayPause();
    });
    
    video.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMute();
    });

    video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
    });

    progressContainer.addEventListener('click', function(e) {
        const width = this.clientWidth;
        video.currentTime = (e.offsetX / width) * video.duration;
    });

    video.addEventListener('play', function() {
        playPauseBtn.classList.replace('icon-play', 'icon-pause');
    });

    video.addEventListener('pause', function() {
        playPauseBtn.classList.replace('icon-pause', 'icon-play');
    });

    video.addEventListener('volumechange', function() {
        if (video.muted) {
            muteBtn.classList.replace('icon-unmute', 'icon-mute');
        } else {
            muteBtn.classList.replace('icon-mute', 'icon-unmute');
        }
    });

    video.addEventListener('loadedmetadata', initControls);
    initControls();
});