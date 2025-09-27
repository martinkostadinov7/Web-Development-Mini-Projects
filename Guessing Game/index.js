let label = document.getElementById("label");
let input = document.getElementById("numberInput");
let submitButton = document.getElementById("tryButton");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let resetButton = document.getElementById("reset");
let redness = 100;
submitButton.onclick = function userGuessing(){
    let guessedNumber = input.value;
    if(guessedNumber == randomNumber) {
        label.textContent = "You win!"
        document.body.style.backgroundColor = `hsla(137, 100%, 50%, 1.00)`;
        return;
    }
    else if(guessedNumber > randomNumber){
        label.textContent = "Lower"
    }
    else{
        label.textContent = "Higher"
    }
    redness -= 10;
    document.body.style.backgroundColor = `hsl(0, 100%, ${redness}%)`;
}

resetButton.onclick = function resetGame(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    label.textContent = "Guess";
    document.body.style.backgroundColor = `hsl(0, 100%, 100%`;
    redness = 100;
}
