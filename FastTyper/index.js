const typingSpace = document.getElementById("typing-space");
let targetTextSymbols = [];
let userTextSymbols = [];
let currentIndex = 0;
let milliseconds = 0;
let intervalId;
let timeStarted = false;
let gameEnded = false;
let corectWords = 0;
let randomWords = "He found his art never progressed when he literally used his sweat and tears.".toLowerCase();
generateWords();

document.addEventListener("keydown", pressedKey);

function pressedKey(event){
   if (gameEnded) {
        window.alert("Reset the game first!");
        return;
    }

    if (isValidInput(event.key)) {
        if (!timeStarted) {
            timeStarted = true;
            intervalId = setInterval(() => {
                milliseconds++;
            }, 10);
        }

        highlightKey(event.key);
        currentIndex++;

        if (currentIndex >= targetTextSymbols.length) {
            endGame();
        }
    }
}

function endGame() {
    gameEnded = true;
    clearInterval(intervalId);
    showStatistics();
}

function showStatistics(){
    clearInterval(intervalId);
    let wordCount = randomWords.split(" ").length;
    let wpm = (60 / (milliseconds / 100)) * wordCount;
    wpm = calculateWpm();
    document.getElementById("seconds").textContent = (milliseconds / 100) + " seconds";
    document.getElementById("wpm").textContent = wpm.toFixed(1) + " wpm";
    console.log(milliseconds);
    console.log(wpm);
    milliseconds = 0;
}

function calculateWpm(){

}

function highlightKey(key) {
    if(key === "Backspace") {
        currentIndex--;
        const currentSymbol = document.getElementById(currentIndex);
        currentSymbol.className = "originalText";
        currentIndex--;
    }
    else{
        const correctSymbol = document.getElementById(currentIndex);
        const userSymbol = key;
        if(correctSymbol.textContent !== userSymbol) {
            correctSymbol.className = "wrongText";
        }
        else{
            correctSymbol.className = "correctText";
        }

    }
}

function generateWords(){
    let index = 0;
    randomWords.split("").forEach(symbol => {
        targetTextSymbols.push(symbol);
        const symbolElement = document.createElement("span");
        symbolElement.textContent = symbol === " " ? "\u00A0" : symbol;
        symbolElement.className = "originalText";
        symbolElement.id = index; 
        typingSpace.appendChild(symbolElement);
        index++;
    });
    console.log(targetTextSymbols);
}

function isValidInput(symbol){
    let letters = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i));
    let symbols = [",", "." ," ", "Backspace"];
    let validInput = letters.concat(symbols);
    let valid = validInput.includes(symbol);
    return valid;
}

function reset() {
    targetTextSymbols = [];
    typingSpace.innerHTML = "";
    currentIndex = 0;
    corectWords = 0;
    generateWords();
}