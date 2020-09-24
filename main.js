const button = document.getElementById('button');
const clicks = document.getElementById('clicks')

var firstClick = false

click = 0;

function launch() {
    setTimeout(() => {
        button.disabled = true
        button.innerHTML = "See your results !"
        clicks.innerHTML = `You have a ratio of  : ${click / 10} clicks per seconds`
        clicks.style.fontSize = "xx-large";
        setTimeout(() => {  
            button.disabled = false;
            button.innerHTML = "Click !"
        }, 5000);
        firstClick = false
    }, 10000);
  }

button.addEventListener("click", function(event) {
  if (firstClick == false) {
    firstClick = true
    launch()
    clicks.style.fontSize = "x-large";
    click = 1
    clicks.innerHTML = `Click : ${click}`
  } else {
    click++
    clicks.innerHTML = `Clicks : ${click}`
  }
  event.preventDefault();
});