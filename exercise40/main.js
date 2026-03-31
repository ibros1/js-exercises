const video = document.querySelector(".video");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-bar");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");
console.log(video);
const videos = [
  {
    url: "./video1.mp4",
  },
  {
    url: "./video2.mp4",
  },
  {
    url: "./video3.mp4",
  },
];

let videoIndex = 0;
let isPlaying = false;
let speed = 1;

// funtions

const displayVideo = (v) => {
  video.src = v.url;
};

displayVideo(videos[videoIndex]);

// play video

function playVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  video.play();
  isPlaying = true;
}
function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  video.pause();
  isPlaying = false;
}

function updateProgress(e) {
  const { currentTime, duration } = e.srcElement;
  if (isNaN(duration)) return;
  const percentageProgress = (currentTime / duration) * 100;
  progress.style.width = `${percentageProgress}%`;

  // total time cal
  const durationMin = Math.floor(duration / 60);
  let durationSec = Math.floor(duration % 60)
    .toString()
    .padStart(2, 0);

  durationEl.textContent = `${durationMin} : ${durationSec}`;

  // calculate time
  const newTimeMin = Math.floor(currentTime / 60);
  const newTimeSec = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, 0);
  currentTimeEl.textContent = `${newTimeMin} : ${newTimeSec}`;
  video.playbackRate = speed;
}

function setProgress(e) {
  const width = e.target.clientWidth;
  const clickX = e.offsetX;
  const duration = video.duration;

  const newTime = (clickX / width) * duration;
  video.currentTime = newTime;
}
function nexVideo() {
  setTimeout(() => {
    pauseVideo();
    videoIndex++;
    if (videoIndex >= videos.length) {
      videoIndex = 0;
    }

    displayVideo(videos[videoIndex]);
    playVideo();
  }, 300);
}
function prevVideo() {
  setTimeout(() => {
    pauseVideo();
    videoIndex--;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    }

    displayVideo(videos[videoIndex]);
    playVideo();
  }, 300);
}

// events
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});

video.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
nextBtn.addEventListener("click", nexVideo);
prevBtn.addEventListener("click", prevVideo);
volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
});
speedSelect.addEventListener("input", (e) => {
  speed = e.target.value;
  video.playbackRate = speed;
});
