const lightIcon = document.getElementById("light");
const clock = document.getElementById("clock-value");
updateClock();
setInterval(updateClock, 1000);

function updateClock(){

    const now = new Date();
    let hours = getCorrectFormat(now.getHours());
    let minutes = getCorrectFormat(now.getMinutes());
    let seconds = getCorrectFormat(now.getSeconds());
    
    updateLight(hours);
    
    let parsedTime = `${hours}:${minutes}:${seconds}`;
    
    clock.textContent = parsedTime;
    
    function getCorrectFormat(value){
        if(Number(value) < 10) return `0${value}`;
        else return value;
    }
}

function updateLight(nowHours){
    if (nowHours > 6 && nowHours < 19) {
        lightIcon.classList.remove("fa-moon");
        lightIcon.classList.add("fa-sun");

        lightIcon.style.cssText = "color: #FFD43B;"
    }
    else{
        lightIcon.classList.remove("fa-sun");
        lightIcon.classList.add("fa-moon");

        lightIcon.style.cssText = "color: #bfbfbfff;"
        clock.style = "color: white"
        document.body.style = "background-color: #000000ff;"
    }
}