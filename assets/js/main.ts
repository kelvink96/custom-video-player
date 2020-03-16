let video: any = document.querySelector('.video');
let progress: any = document.querySelector('.progress-bar');
let playPauseBtn: any = document.getElementById('play-pause');

playPauseBtn.onclick = function () {
    togglePlayPause();
};

function togglePlayPause() {
    if (this.video.paused) {
        this.playPauseBtn.className = 'pause';
        this.video.play();
    } else {
        this.playPauseBtn.className = 'play';
        this.video.pause();
    }
}

video.addEventListener('timeupdate', () => {
    let progressPosition: number = video.currentTime / video.duration;
    progress.style.width = progressPosition * 100 + '%';
    video.ended = 100 && (playPauseBtn.className = 'play');
});
