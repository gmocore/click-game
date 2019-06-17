const clickArea = document.querySelector('.click-area');
const timer = document.getElementById('timer');
const thirty = document.getElementById('30');
const sixty = document.getElementById('60');
const ninety = document.getElementById('90');
const oneTwenty = document.getElementById('120');
const clickDisplay = document.getElementById('click-display');
let clickCount = 0;

// Functionality option: click listener for whole window.
// window.addEventListener("click", () => {
//   console.log("clicked");
//   clickCount++;
//   clickDisplay.innerHTML = clickCount;
// });

clickArea.addEventListener("click", () => {
  console.log("area clicked");
  clickCount++;
  clickDisplay.innerHTML = clickCount;
});

function clickCounterReset() {
  clickCount = 0;
  clickDisplay.innerHTML = clickCount;
}

// TODO  when user clicks multiple buttons, multiple setIntervals run at the same time.
// TODO add reset to clicks when seconds button is selected. functionality is already implemented in 5 seconds button
thirty.addEventListener('click', () => {
    clickCounterReset()
    timerCountdown()
    timer.innerHTML = parseInt(thirty.id);
    let timerCounter = parseInt(timer.innerHTML)
    var timerInterval = setInterval(timerCountdown, 1000)
    function timerCountdown() {
        if(timerCounter == 0){
            clearInterval(timerInterval)
        } else {
            timerCounter--
            timer.innerHTML = timerCounter;
            // TODO smooth transiiton for timer countdown. and when a numbver over 100 is selected, shit breaks
            timer.style.width = `${timerCounter}%`
        }
    }
  }
});

sixty.addEventListener("click", () => {
  clickCounterReset();
  timer.innerHTML = parseInt(sixty.id);
  let timerCounter = parseInt(timer.innerHTML);
  var timerInterval = setInterval(timerCountdown, 1000);
  function timerCountdown() {
    if (timerCounter == 0) {
      clearInterval(timerInterval);
    } else {
      timerCounter--;
      timer.innerHTML = timerCounter;
    }
  }
});
ninety.addEventListener("click", () => {
  clickCounterReset();
  timer.innerHTML = parseInt(ninety.id);
  let timerCounter = parseInt(timer.innerHTML);
  var timerInterval = setInterval(timerCountdown, 1000);
  function timerCountdown() {
    if (timerCounter == 0) {
      clearInterval(timerInterval);
    } else {
      timerCounter--;
      timer.innerHTML = timerCounter;
    }
  }
});
oneTwenty.addEventListener("click", () => {
  clickCounterReset();
  timer.innerHTML = parseInt(oneTwenty.id);
  let timerCounter = parseInt(timer.innerHTML);
  var timerInterval = setInterval(timerCountdown, 1000);
  function timerCountdown() {
    if (timerCounter == 0) {
      clearInterval(timerInterval);
    } else {
      timerCounter--;
      timer.innerHTML = timerCounter;
    }
  }
});
