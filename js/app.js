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

let j = 0;

var el = document.getElementById("graph"); // get canvas
var el = document.getElementById("donut");

const myDonut = setInterval(() => {
    el.style.width = `${j}%`;
    console.log(el.style.width);
  j++;
  if (j == 76) {
    clearInterval(myDonut);
  }
// console.log(progress.style.width);
}, 10);

var options = {
    width:  el.style.width || myDonut,
    size: el.getAttribute('data-size') || 220,
    lineWidth: el.getAttribute('data-line') || 15,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.width + '%';

if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, myDonut) {
        myDonut = Math.min(Math.max(0, myDonut || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * myDonut, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
};

drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#555555', options.lineWidth, options.width / 100);