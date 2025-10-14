const rollBtn = document.getElementById("roll");
const image = document.getElementById("dice");
const diceImages = ["images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png"];

rollBtn.onclick = function(){
    let randomIndex = Math.round(Math.random() * 5);
    console.log(randomIndex);
    image.src = diceImages[randomIndex];
}