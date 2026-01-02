// Optimized code with the help of AI

const btns = document.querySelectorAll(".btn");

const sounds = {};

btns.forEach((btn) => {
  const id = btn.id;
  sounds[id] = new Audio(`sounds/${id}.wav`);
});

function playsound(key) {
  const audio = sounds[key];
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  
  const btn = document.getElementById(key);
  if (btn) {
    btn.classList.remove("btn-clicked");
    void btn.offsetWidth; // Trigger reflow to restart animation
    btn.classList.add("btn-clicked");
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("btn-clicked");
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => playsound(btn.id));
  btn.addEventListener("transitionend", removeTransition);
});

document.addEventListener("keydown", (e) => {
  return playsound(e.key.toLowerCase());
});

// Original solution

// document.addEventListener("keydown", (e) => {
//   const path = `sounds/${e.key.toLowerCase()}.wav`;
//   const audio = new Audio(path);
//   audio.play();
// });
// function playBtnSound(btn) {
//   const path = `sounds/${btn.id}.wav`;
//   const audio = new Audio(path);
//   btn.classList.add("btn-clicked");
//   // if (aud.played > 1) {
//   // audio.currentTime = 0;
//   // }
//   audio.play();
// }

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => playBtnSound(btn));
// });
