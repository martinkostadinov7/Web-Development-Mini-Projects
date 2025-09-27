
let numberLabel = document.getElementById("number");
function updateLabel(sign) {
    let stepInput = Number(document.getElementById("stepInput").value);
    let currentNumber = Number(numberLabel.textContent);
    numberLabel.textContent = currentNumber + stepInput * sign; 
}

document.getElementById("minus").onclick = () => updateLabel(-1);
document.getElementById("plus").onclick = () => updateLabel(+1);
document.getElementById("reset").onclick = () => numberLabel.textContent = 0;