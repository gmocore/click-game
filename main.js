const clickArea = document.querySelector('.click-area');
const timer = document.getElementById('timer');
const five = document.getElementById('5');
const ten = document.getElementById('10');
const eleven = document.getElementById('11');
const twelve = document.getElementById('12');
const clickDisplay = document.getElementById('click-display');


let clickCount = 0;

clickArea.addEventListener('click', () => {
    console.log("area clicked");
    clickCount++
    clickDisplay.innerHTML = clickCount
    
})



// TODO  when user clicks multiple buttons, multiple setIntervals run at the same time
five.addEventListener('click', () => {
    timer.innerHTML = parseInt(five.id);
    let timerCounter = parseInt(timer.innerHTML)
    var timerInterval = setInterval(timerCountdown, 1000)
    function timerCountdown() {
        if(timerCounter == 0){
            clearInterval(timerInterval)
        } else {
            timerCounter--
            timer.innerHTML = timerCounter;
        }
           
    }
})
ten.addEventListener('click', () => {
    timer.innerHTML = parseInt(ten.id);
    let timerCounter = parseInt(timer.innerHTML)
    var timerInterval = setInterval(timerCountdown, 1000)
    function timerCountdown() {
        if(timerCounter == 0){
            clearInterval(timerInterval)
        } else {
            timerCounter--
            timer.innerHTML = timerCounter;
        }
           
    }
})
eleven.addEventListener('click', () => {
    timer.innerHTML = parseInt(eleven.id);
    let timerCounter = parseInt(timer.innerHTML)
    var timerInterval = setInterval(timerCountdown, 1000)
    function timerCountdown() {
        if(timerCounter == 0){
            clearInterval(timerInterval)
        } else {
            timerCounter--
            timer.innerHTML = timerCounter;
        }
           
    }
})
twelve.addEventListener('click', () => {
    timer.innerHTML = parseInt(twelve.id);
    let timerCounter = parseInt(timer.innerHTML)
    var timerInterval = setInterval(timerCountdown, 1000)
    function timerCountdown() {
        if(timerCounter == 0){
            clearInterval(timerInterval)
        } else {
            timerCounter--
            timer.innerHTML = timerCounter;
        }
           
    }
})