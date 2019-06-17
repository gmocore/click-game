// TODO:  When user clicks multiple buttons, multiple timers run at the same time.
// TODO:  Need a reset button of some sort.  Since when you click on one of the seconds buttons it will start the timer and when the timer is done clicking the button doesn't do anything.
// TODO:  innerHTML for startTimer() just sets the innerHTML but doesn't update as timer bar goes down.

// Functionality Option: click listener for whole window.
// window.addEventListener("click", () => {
//   console.log("clicked");
//   clickCount++;
//   clickDisplay.innerHTML = clickCount;
// });

// Variables
const clickArea = document.querySelector('.click-area');
const timer = document.getElementById('timer');
const thirty = document.getElementById('5');
const sixty = document.getElementById('60');
const ninety = document.getElementById('90');
const oneTwenty = document.getElementById('120');
const clickDisplay = document.getElementById('click-display');
let clickCount = 0;


// FUNCTIONS
function clickCounterReset() {
  clickCount = 0;
  clickDisplay.innerHTML = clickCount;
}

function startTimer(seconds) {
    timer.style.animationDuration = `${seconds.id}s`;
    timer.style.animationPlayState = 'running';
    timer.innerHTML = seconds.id;
}


// EVENTLISTENERS
clickArea.addEventListener("click", () => {
    clickCount++;
    clickDisplay.innerHTML = clickCount;
});

thirty.addEventListener('click', () => {
    clickCounterReset();
    startTimer(thirty);
});

sixty.addEventListener('click', () => {
    clickCounterReset();
    startTimer(sixty);
});

ninety.addEventListener('click', () => {
    clickCounterReset();
    startTimer(ninety);
});

oneTwenty.addEventListener('click', () => {
    clickCounterReset();
    startTimer(oneTwenty);
});


// /////////////////////////////////////////////////
// KEEP THIS INCASE WE NEED TO REFERENCE IT LATER.
// ////////////////////////////////////////////////
// thirty.addEventListener('click', () => {
//     clickCounterReset()
//     timer.innerHTML = parseInt(thirty.id);
//     let timerCounter = parseInt(timer.innerHTML)
//     var timerInterval = setInterval(timerCountdown, 1000)
//     function timerCountdown() {
//         if(timerCounter == 0){
//             clearInterval(timerInterval)
//         } else {
//             timerCounter--
//             timer.innerHTML = timerCounter;
//             timer.style.width = `${timerCounter}%`
//         }
//     }
//   }
// );