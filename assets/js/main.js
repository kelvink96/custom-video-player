var video = document.querySelector('.video');
var progress = document.querySelector('.progress-bar');
var playPauseBtn = document.getElementById('play-pause');
playPauseBtn.onclick = function () {
    togglePlayPause();
};
function togglePlayPause() {
    if (this.video.paused) {
        this.playPauseBtn.className = 'pause';
        this.video.play();
    }
    else {
        this.playPauseBtn.className = 'play';
        this.video.pause();
    }
}
