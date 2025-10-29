const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

one.onclick = () => appendToDisplay("1");
two.onclick = () => appendToDisplay("2");
three.onclick = () => appendToDisplay("3");
four.onclick = () => appendToDisplay("4");
five.onclick = () => appendToDisplay("5");
six.onclick = () => appendToDisplay("6");
seven.onclick = () => appendToDisplay("7");
eight.onclick = () => appendToDisplay("8");
nine.onclick = () => appendToDisplay("9");
zero.onclick = () => appendToDisplay("0");
divide.onclick = () =>  appendToDisplay("/");
multiply.onclick = () => appendToDisplay("*");
minus.onclick = () =>  appendToDisplay("-");
plus.onclick = () => appendToDisplay("+");
equals.onclick = () => solve();
clear.onclick = () => clearDisplay();

const display = document.getElementById("display");

function solve(){
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}

function appendToDisplay(symbol){
    display.textContent += symbol;

    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.textContent = "";
}