const colorValue = document.getElementById("value"); 
function generateColor(){
    let rgbValueString = "rgb("
    for (let i = 0; i < 3; i++) {
        let randomValue = Math.floor(Math.random() * 255);
        rgbValueString += `${randomValue}, `;
    }
    rgbValueString = rgbValueString.slice(0, rgbValueString.length - 2)
    rgbValueString += ")";

    document.body.style.backgroundColor = rgbValueString;
    colorValue.textContent = rgbValueString;
}