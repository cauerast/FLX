// fetch = function used for making HTP requests to fetch resources. (JSON style data, images, files)
// Simplifies asynchronous data fetching in javascript and used for interacting withc APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options});


// html used 
/*
  <input type="text" id="pokemonName" placeholder="Enter a pokemon name...">
  <button onclick="fetchPokemon()">Fetch Pokemon</button>

  <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none;">
*/

// unsing async await => 

async function fetchPokemon(){
    try{

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("cound not fetch resource");
        }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite`);

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}