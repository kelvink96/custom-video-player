let video: any = document.querySelector('.video');
let progress = document.querySelector('.progress-bar');
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

