// TODO:  Need a reset button of some sort. 
// TODO:  Update thirty’s ID to no longer be 5 seconds.  Update in main.js and index.html
// TODO:  Make better styles

const clickArea = document.querySelector(".click-area");
const timer = document.getElementById("timer");
const timerButtons = document.querySelectorAll('.button')
const clickDisplay = document.getElementById("click-display");
let clickCount = 0;
let gameStarted = false;
let timerInterval

timerButtons.forEach((timerButton) => {
  timerButton.addEventListener('click', startGame);
})

function clickAreaCounter() {
  clickCount++;
  clickDisplay.innerHTML = clickCount;
}

function clickCounterReset() {
  if (gameStarted == false) {
    clickCount = 0;
    clickDisplay.innerHTML = clickCount;
    clickArea.addEventListener("click", clickAreaCounter);
  }
}

function clearAnimation() {
  timer.classList.remove("timer-animation");
}

function setAnimation(clickedItem) {
  timer.classList.add("timer-animation");
  timer.style.animationDuration = `${clickedItem}s`;
}

function stopTimerInterval() {
  clearInterval(timerInterval);
  clearAnimation()
}

function setTimerInterval(clickedItem) {
  timerInterval = setInterval(function() {
    clickedItem--;
    timer.innerHTML = clickedItem;
    if (clickedItem == 0) {
      gameStarted = false
      stopTimerInterval()
      timer.innerHTML = 'You Clicked ' + clickCount + ' Times.';
      clickArea.removeEventListener("click", clickAreaCounter);
    }
  }, 1000);
}

function startGame(event) {
  clickCounterReset()
  let clickedItem = event.target.id;
  if (gameStarted == false) {
    gameStarted = true
    timer.innerHTML = clickedItem;
    setAnimation(clickedItem)
    setTimerInterval(clickedItem)
  }
}




// Playground
// function startTimer(event) {
//   clickCounterReset()
//   let timerInterval
//   if (gameStarted == false) {
//     gameStarted = true
//     let clickedItem = event.target.id;
//     timer.innerHTML = clickedItem;
//     timer.classList.add("timer-animation");
//     timer.style.animationDuration = `${clickedItem}s`;
//     setTimerInterval(clickedItem)
//   } else if (gameStarted == true) {
//     stopTimerInterval()
//     timer.style.animationDuration = `0s`;
//     clearAnimation()
//     timer.innerHTML = 'You Clicked ' + clickCount + ' Times.';
//     clickArea.removeEventListener("click", clickAreaCounter);
//   }
  
//   function clearAnimation() {
//     timer.classList.remove("timer-animation");
//   }
  
//   function setTimerInterval(clickedItem) {
//     timerInterval = setInterval(function() {
//       clickedItem--;
//       timer.innerHTML = clickedItem;
//       console.log('setInterval is still running')
//       if (clickedItem == 0) {
//         gameStarted = false
//         stopTimerInterval()
//         clearAnimation()
//         timer.innerHTML = 'You Clicked ' + clickCount + ' Times.';
//         clickArea.removeEventListener("click", clickAreaCounter);
//       }
//     }, 1000);
//   }
  
//   function stopTimerInterval() {
//     clearInterval(timerInterval);
//   }
// }

  


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