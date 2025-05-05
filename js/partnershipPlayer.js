document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.useful-video');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const muteBtn = document.querySelector('.mute-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress-container');

    // Инициализация состояний при загрузке
    function initControls() {
        // Mute/Unmute
        if (video.muted) {
            muteBtn.classList.add('icon-mute');
            muteBtn.classList.remove('icon-unmute');
        } else {
            muteBtn.classList.add('icon-unmute');
            muteBtn.classList.remove('icon-mute');
        }
        
        // Play/Pause
        if (video.paused) {
            playPauseBtn.classList.add('icon-play');
            playPauseBtn.classList.remove('icon-pause');
        } else {
            playPauseBtn.classList.add('icon-pause');
            playPauseBtn.classList.remove('icon-play');
        }
    }

    // Play/Pause
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseBtn.classList.replace('icon-play', 'icon-pause');
        } else {
            video.pause();
            playPauseBtn.classList.replace('icon-pause', 'icon-play');
        }
    }

    // Mute/Unmute
    function toggleMute() {
        video.muted = !video.muted;
        if (video.muted) {
            muteBtn.classList.replace('icon-unmute', 'icon-mute');
        } else {
            muteBtn.classList.replace('icon-mute', 'icon-unmute');
        }
    }

    // Обработчики событий
    playPauseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePlayPause();
    });
    
    video.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMute();
    });

    // Прогрессбар
    video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
    });

    progressContainer.addEventListener('click', function(e) {
        const width = this.clientWidth;
        video.currentTime = (e.offsetX / width) * video.duration;
    });

    // Синхронизация при изменении состояния видео
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

    // Инициализация при загрузке
    video.addEventListener('loadedmetadata', initControls);
    initControls(); // На случай, если метаданные уже загружены
});