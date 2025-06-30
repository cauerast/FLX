// JSNON = (JavaScript Object Notation) data-intercgange format Used for exchanging data between a server and a web application. JSON files {key: value} or [v1, v2, v3, ...]
// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

// JSON.stringify() =
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const jsonStringNames = JSON.stringify(names);
console.log(jsonStringNames);

const person = {
    "name": "Spongebob", 
    "age": 30,
    "isEmployed": true, 
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const jsonStringPerson = JSON.stringify(person);
console.log(jsonStringPerson);

const people = [{
    "name": "Spongebob", 
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick", 
    "age": 34,
    "isEmployed": false
},
{
   "name": "Squidward", 
    "age": 50,
    "isEmployed": true 
},
{
    "name": "Sandy", 
    "age": 27,
    "isEmployed": false
}];
const jsonStringPeople = JSON.stringify(people);
console.log(jsonStringPeople);


// JSON.parse() = 
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30,"isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30,"isEmployed": true},
                    {"name": "Patrick", "age": 34,"isEmployed": false},
                    {"name": "Squidward", "age": 50,"isEmployed": true },
                    {"name": "Sandy", "age": 27,"isEmployed": false}]`;

const parsedDataNames = JSON.parse(jsonNames);
console.log(parsedData);

const parsedDataPerson = JSON.parse(jsonPerson);
console.log(parsedDataPerson);

const parsedDataPeople = JSON.parse(jsonPeople);
console.log(parsedDataPeople);

// fetch() =

fetch("73-names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("73-people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)));

fetch("73-person.json")
    .then(response => response.json())
    .then(value => console.log(value));

