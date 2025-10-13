const euroToLevRadio = document.getElementById("euro-to-lev");
const levToEuroRadio = document.getElementById("lev-to-euro");
const textInput = document.getElementById("input");
const convertBtn = document.getElementById("submit");
const valueLbl = document.getElementById("value");
const currencyLbl = document.getElementById("currency");

convertBtn.onclick = function(){
    if(validateInput()) {
        let value = Number(textInput.value);
        let currency;
        value = euroToLevRadio.checked ? value * 1.96 : value / 1.96;
        currency = euroToLevRadio.checked ? 'lv.' : '€';
        valueLbl.textContent = value.toFixed(2);
        currencyLbl.textContent = currency;
    }
}

function validateInput() {
    let value = Number(textInput.value)

    if(Number.isNaN(value) || value === 0){
        window.alert("Enter a valid number in the text box!");
        return false;
    }
    if(!euroToLevRadio.checked && !levToEuroRadio.checked) {
        window.alert("Select a unit!");
        return false;
    }
    return true;
}