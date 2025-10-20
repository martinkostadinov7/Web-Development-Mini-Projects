const hoursUpButton = document.getElementById("hoursUpButton");
const minutesUpButton = document.getElementById("minutesUpButton");
const secondsUpButton = document.getElementById("secondsUpButton");
const hoursDownButton = document.getElementById("hoursDownButton");
const minutesDownButton = document.getElementById("minutesDownButton");
const secondsDownButton = document.getElementById("secondsDownButton");

const topButtons = document.getElementById("top-buttons");
const bottomButtons = document.getElementById("bottom-buttons");

const pauseResumeButton = document.getElementById("pause-resume");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");
const timerValue = document.getElementById("timer-value");

let running = false;

hoursUpButton.addEventListener("click", () => changeValue("hours", 1));
minutesUpButton.addEventListener("click", () => changeValue("minutes", 5));
secondsUpButton.addEventListener("click", () => changeValue("seconds", 10));

hoursDownButton.addEventListener("click", () => changeValue("hours", -1));
minutesDownButton.addEventListener("click", () => changeValue("minutes", -5));
secondsDownButton.addEventListener("click", () => changeValue("seconds", -10));

let remainingSeconds = 0;
let intervalId;
let countingDown = false;

pauseResumeButton.addEventListener("click", () => {
    countingDown = !countingDown;
    if (countingDown) {
        pauseResumeButton.textContent = "Pause";
        intervalId = setInterval(updateTime, 1000);
    }
    else{
        pauseResumeButton.textContent = "Resume";
        clearInterval(intervalId);
    }
});

function changeValue(type, step){
    switch (type) {
        case "hours":
            let hoursValue = Number(timerValue.textContent.slice(0,2));
            hoursValue += step;
            if(hoursValue > 23) hoursValue -= step;
            if (hoursValue < 0) hoursValue -= step;
            
            timerValue.textContent = hoursValue.toString().padStart(2, "0") + timerValue.textContent.slice(2, 8);
            break;

        case "minutes":
            let minutesValue = Number(timerValue.textContent.slice(3,5));
            minutesValue += step;
            
            if(minutesValue > 59) minutesValue -= step;
            if (minutesValue < 0) minutesValue -= step;
            
            timerValue.textContent = timerValue.textContent.slice(0, 3) + minutesValue.toString().padStart(2, "0") +  timerValue.textContent.slice(5, 8);
            break;
    
        case "seconds":
            let secondsValue = Number(timerValue.textContent.slice(6,8));
            
            secondsValue += step;

            if(secondsValue > 59) secondsValue -= step;
            if (secondsValue < 0) secondsValue -= step;

            timerValue.textContent = timerValue.textContent.slice(0, 6) + secondsValue.toString().padStart(2, "0");
            break;
    
        default:
            break;
    }
}

startButton.addEventListener("click", () => {
    if (calculateTotalSeconds() !== 0) {
        running = !running;
        changeButtonStyle();
        countingDown = true;
        intervalId = setInterval(updateTime, 1000);
    }
    else window.alert("Set a time for the timer!")
});

function updateTime() {
    remainingSeconds--;
    if (remainingSeconds === -1) {
        window.alert("Ring ring ring!");
        resetTimer();
        return;
    }
    console.log(remainingSeconds);
    let secondsText = Math.floor(remainingSeconds % 60);
    console.log(secondsText);
    let minutesText = Math.floor((remainingSeconds / 60));
    let hoursText = Math.floor(minutesText / 60);

    secondsText %= 60;
    minutesText %= 60;

    let stopwatchValue = `${hoursText.toString().padStart(2, "0")}:${minutesText.toString().padStart(2, "0")}:${secondsText.toString().padStart(2, "0")}`;
    timerValue.textContent = stopwatchValue;
}

resetButton.addEventListener("click", resetTimer);

function resetTimer(){
    running = !running;
    changeButtonStyle();
    clearInterval(intervalId);
    countingDown = false;
    timerValue.textContent = "00:00:00";
}

function calculateTotalSeconds(){
    let values = timerValue.textContent.split(":");
    let hours = Number(values[0]);
    let minutes = Number(values[1]);
    let seconds = Number(values[2]);

    let totalSeconds = seconds + minutes * 60 + hours * 3600;
    remainingSeconds = totalSeconds;
    return totalSeconds;
}

function changeButtonStyle(){
    if (running) {
        startButton.style.display = "none";
        resetButton.style.display = "inline-block"; 
        pauseResumeButton.style.display = "inline-block"; 
        topButtons.classList.add("invisible");
        bottomButtons.classList.add("invisible");
    }
    else{
        startButton.style.display = "inline-block";
        resetButton.style.display = "none"; 
        pauseResumeButton.style.display = "none";     
        topButtons.classList.remove("invisible");
        bottomButtons.classList.remove("invisible");
    
    }
}
