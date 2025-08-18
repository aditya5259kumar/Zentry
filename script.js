/* ----------------- hero next background ----------------- */

const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = [
  "assets/videos/hero-1.mp4",
  "assets/videos/hero-2.mp4",
  "assets/videos/hero-3.mp4",
  "assets/videos/hero-4.mp4",
];

let index = 0;

nextButton.addEventListener("click", () => {

  index += 1;
  video.src = movieList[index];

  if (index === 3) {
    index = -1;
  }
});

// -----------------------------------------------------------------

const audio = document.getElementById("background-audio");
const audioToggle = document.getElementById("audio-toggle");

audioToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioToggle.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  } else {
    audio.pause();
    audioToggle.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  }
});
