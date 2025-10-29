const startStopButton = document.getElementById("start-stop");
const resetLapButton = document.getElementById("reset-lap");
const stopwatchTime = document.getElementById("stopwatch");
const laps = document.getElementById("laps");
let running = false;
let milliseconds = 0;
let intervalId;
let stopwatchValue;

startStopButton.addEventListener("click", () => {
    running = !running;
    if(running){
        resetLapButton.textContent = "Lap";
        intervalId = setInterval(updateTime, 10);
    }
    else{
        resetLapButton.textContent = "Reset";
        clearInterval(intervalId);
    }
    changeButtonStyle();
});

resetLapButton.addEventListener("click", () => {
    if(running){
        resetLapButton.textContent = "Lap";
        addLap();
    }
    else{
        resetLapButton.textContent = "Reset";
        resetStopwatch();
    }
});

function addLap() {
    const lap = document.createElement("li");
    lap.textContent = stopwatchValue;  
    laps.appendChild(lap);
}

function resetStopwatch() {
    clearInterval(intervalId);
    stopwatchTime.textContent = "00:00:00,00"
    laps.innerHTML = "";
    milliseconds = 0;
    running = false;
}

function updateTime() {
    milliseconds++;
    let millisecondsText = Math.floor(milliseconds % 100);
    let secondsText = Math.floor(milliseconds / 100);
    let minutesText = Math.floor((secondsText / 60));
    let hoursText = Math.floor(minutesText / 60);

    secondsText %= 60;
    minutesText %= 60;

    if (millisecondsText < 10) millisecondsText = "0" + millisecondsText;
    if (secondsText < 10) secondsText = "0" + secondsText;
    if (minutesText < 10) minutesText = "0" + minutesText;
    if (hoursText < 10) hoursText = "0" + hoursText;

    stopwatchValue = `${hoursText}:${minutesText}:${secondsText},${millisecondsText}`;
    stopwatchTime.textContent = stopwatchValue;
}

function changeButtonStyle(){
    if (running) {
    startStopButton.textContent = "Stop";
    startStopButton.classList.remove("start");
    startStopButton.classList.add("stop");
    console.log("Running");
  } else {
    startStopButton.textContent = "Start";
    startStopButton.classList.remove("stop");
    startStopButton.classList.add("start");
    console.log("Not Running");
  }
}