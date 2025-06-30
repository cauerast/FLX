// fetch = function used for making HTP requests to fetch resources. (JSON style data, images, files)
// Simplifies asynchronous data fetching in javascript and used for interacting withc APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options});

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

// unsing async await => 

fetchData();

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if(!response.ok){
            throw new Error("cound not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}