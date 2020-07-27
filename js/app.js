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

const numb = document.querySelector(".numb");
      let counter = 0;
      setInterval(()=>{
        if(counter == 60){
          clearInterval();
        }else{
          counter+=1;
          numb.textContent = counter + "%";
        }
      }, 10);