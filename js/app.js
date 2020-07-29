const progress = document.getElementById("bar");

let i = 0;

const myInterval = setInterval(() => {
  progress.style.width = `${i}%`;
  document.getElementById("Progress").innerHTML = progress.style.width;
  i++;
  if (i === 76) {
    clearInterval(myInterval);
  }
}, 10);

// Donut

document.addEventListener("DOMContentLoaded", () => {
  progressDonutAnim(60, 15);
});

function progressDonutAnim(percent, interval) {
  let circle = document.getElementById("circle");
  let text = document.getElementById("percent");
  let angle = 0;
  percent = percent * 4.7;

  window.timer = window.setInterval(() => {
    circle.setAttribute("stroke-dasharray", angle + ", 20000");

    text.innerHTML = parseInt((angle / 471) * 100) + " %";

    if (angle >= percent) {
      window.clearInterval(window.timer);
    }
    angle += 7;
  }, interval);
}

//  Menu
let closeBtn = document.getElementById("menu");
let openBtn = document.getElementById("menuBtn");

openBtn.addEventListener("click", () => {
  console.log("coucou");
  closeBtn.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});
