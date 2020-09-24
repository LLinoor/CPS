const button = document.getElementById('button')
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const clicks = document.getElementById('clicks')

var firstClick = false
var currentPlace = 2
var height = ["40px", "75px", "100px", "200px", "400px", "600px", "1000px"]
var width = ["70px", "150px", "200px", "400px", "600px", "1000px", "1600px"]

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

increase.addEventListener("click", function(event){
  if (currentPlace == 5){
    return
  }
  else{
    currentPlace++
    button.style.width = width[currentPlace];
    button.style.height = height[currentPlace];
  }
 event.preventDefault() 
})

decrease.addEventListener("click", function(event){
  if (currentPlace == 0){
    return
  }
  else{
    currentPlace--
    button.style.width = width[currentPlace];
    button.style.height = height[currentPlace];
}
 event.preventDefault() 
})