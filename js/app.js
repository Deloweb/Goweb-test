const progress = document.getElementById("bar");

let i = 0;

const myInterval = setInterval(() => {
  progress.style.width = `${i}%`;
  document.getElementById("Progress").innerHTML = progress.style.width;
  i++;
  if (i === 76) {
    clearInterval(myInterval);
  }
  // console.log(progress.style.width);
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
let menu = document.getElementById("menu");

const showMenu = () => {
  menu.style.display = "flex";
};

const closeMenu = () => {
  menu.style.display = "none";
};
