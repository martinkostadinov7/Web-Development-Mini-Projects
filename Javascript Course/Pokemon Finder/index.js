async function displayPokemon(){
    document.getElementById("error-message").textContent = ``;
    
    const pokemonName = document.getElementById("pokemon-name").value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        document.getElementById("error-message").textContent = `Cound not find pokemon with name ${pokemonName}!`;
        return;
    }

    const data = await response.json();

    console.log(data);
    document.getElementById("pokemon-image").src = data.sprites.front_default;
    document.getElementById("pokemon-image").style.display = "block";
}