const button = document.querySelector('.button');
const clickArea = document.querySelector('.click-area');
const timer = document.getElementById('timer');

button.addEventListener('click', () => {
    console.log("button clicked");
    
})

clickArea.addEventListener('click', () => {
    console.log("area clicked");
    
})

let timerCounter = parseInt(timer.innerHTML)
var timerInterval = setInterval(timerCountdown, 1000)
function timerCountdown() {
    if(timerCounter == 0){
        clearInterval(timerInterval)
    } else {
        timerCounter--
        console.log(timerCounter);
        timer.innerHTML = timerCounter;
    }
       
}












