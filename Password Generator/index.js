const capitalLettersBtn = document.getElementById("capitalLetters")
const numbersBtn = document.getElementById("numbers")
const specialSymbolsBtn = document.getElementById("specialSymbols")
const passwordLabel = document.getElementById("password");
const lowercase = "abcdefghijklmnopqrstuvwxyz"; 
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%&*/?";

function generatePassword(){
    const length = Number(document.getElementById("lengthInput").value);
    let password = [];
    let availableIndexes = new Set([...Array(length).keys()]);
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * lowercase.length);
        password.push(lowercase[randomIndex]);
    }

    if(capitalLettersBtn.checked) {
        password = AddCharacters(password, uppercase, availableIndexes, 0.3);
    }

    if(numbersBtn.checked) {
        password = AddCharacters(password, numbers, availableIndexes, 0.2);
    }

    if(specialSymbolsBtn.checked) {
        password = AddCharacters(password, symbols, availableIndexes, 0.1);
    }

    passwordLabel.textContent = password.join("");
}

function GetRandomIndex(array){
    let index = Math.floor(Math.random() * array.length);
    return index;
}

function AddCharacters(password, characters, availableIndexes, characterRarity){
    let freePositions = Array.from(availableIndexes);
    for (let i = 0; i < Math.max(password.length * characterRarity); i++) {
        if (freePositions.length === 0) break;

        let posIndex = GetRandomIndex(freePositions);
        let pos = freePositions[posIndex];

        let charIndex = GetRandomIndex(characters);
        password[pos] = characters[charIndex];

        availableIndexes.delete(pos);
        freePositions.splice(posIndex, 1);       
    }

    return password;
}