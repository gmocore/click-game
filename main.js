// TODO:  When user clicks multiple buttons, multiple timers run at the same time.
// TODO:  Need a reset button of some sort.  Since when you click on one of the seconds buttons it will start the timer and when the timer is done clicking the button doesn't do anything.
// TODO:  Still need some modifications to setting the timers InnerHTML.  We don't want the green bar to come back when finished.
// TODO:  Update thirty’s ID to no longer be 5 seconds.  Update in main.js and index.html
// TODO:  Need to make click area not clickable when timer is done.  I have a removeEventHandler in the clearInterval for now if you comment it out it will work... But I'm not sure that is the best way to do it.

// Functionality Option: click listener for whole window.
// window.addEventListener("click", () => {
//   console.log("clicked");
//   clickCount++;
//   clickDisplay.innerHTML = clickCount;
// });

// Variables
const clickArea = document.querySelector(".click-area");
const timer = document.getElementById("timer");
// const parentTimeSelect = document.querySelector("#time-select");
const timerButtons = document.querySelectorAll('.button')
const clickDisplay = document.getElementById("click-display");
let clickCount = 0;
let gameStarted = false;

// EVENTLISTENERS
timerButtons.forEach((timerButton) => {
  timerButton.addEventListener('click', startTimer, false);
})
// parentTimeSelect.addEventListener("click", startTimer);
clickArea.addEventListener("click", clickAreaCounter);

// FUNCTIONS
function clickAreaCounter() {
  clickCount++;
  clickDisplay.innerHTML = clickCount;
}

function clickCounterReset() {
  clickCount = 0;
  clickDisplay.innerHTML = clickCount;
}

function startTimer(event) {
  clickCounterReset()
  if (gameStarted == false) {
    gameStarted = true
    var clickedItem = event.target.id;
    // timer.style.animationPlayState = "running";
    timer.innerHTML = clickedItem;
    timer.classList.add("timer-animation");
    timer.style.animationDuration = `${clickedItem}s`;
    var timerInterval = setInterval(function() {
      clickedItem--;
      timer.innerHTML = clickedItem;
      if (clickedItem == 0) {
        gameStarted = false
        console.log(gameStarted)
        clearAnimation()
        timer.innerHTML = 'You Clicked ' + clickCount + ' Times.';
        // clickArea.removeEventListener("click", clickAreaCounter, false);
      }
    }, 1000);
  }
  event.stopPropagation()
  function clearAnimation() {
    clearInterval(timerInterval);
    timer.classList.remove("timer-animation");
  }
}


  


//////////////////////////////////////////////////////
// KEEP THIS INCASE WE NEED TO REFERENCE IT LATER. //
////////////////////////////////////////////////////

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



//////////////////////////////////////////////////
//////             Jquery Way              //////
////////////////////////////////////////////////

// Basically comment everything else out above and I just have it running on auto pilot... I gave up as I want to just use javascript not jquery
// You also have to add this script tag in the head<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
// https://stackoverflow.com/questions/24530908/showing-a-time-countdown-progress-bar
// https://codepen.io/Rudchyk/pen/qNOEGj

// const thirty = document.getElementById("5");
// thirty.addEventListener('click', progress(20, 20, $('#timer')), false)

// function progress(timeleft, timetotal, $element) {
//   var progressBarWidth = timeleft * $element.width() / timetotal;
//   $element.animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear').html(timeleft + " seconds to go");
//   if(timeleft > 0) {
//       setTimeout(function() {
//           progress(timeleft - 1, timetotal, $element);
//       }, 1000);
//   }
// };