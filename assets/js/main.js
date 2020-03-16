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
video.addEventListener('timeupdate', function () {
    var progressPosition = video.currentTime / video.duration;
    progress.style.width = progressPosition * 100 + '%';
    video.ended = 100 && (playPauseBtn.className = 'play');
});
