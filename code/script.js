/*
//INTRODUCTION TO JS//
let students = 30;
console.log(students, typeof students)

students = students + 1;
students = students - 1;
students = students * 1;
students = students / 1;
students = students ** 2;
extraStudents = students % 3;

students += 1;
students -= 1;
students *= 1;
students /= 2;
students **= 2; 
students %= 2; 

students++;
students--;

let result = 12 % 5 + 8 / 2 ;
console.log(result);
*/


/*
let x = "";
let y = "";
let z = "bhn";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/


/*
// circumference calculator//
const PI = 3.141559;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
    
*/


/*

// COUNTER PROGRAM // 
const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const countLabel = document.getElementById(`countLabel`)
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
} 

*/

/*
// MATH //
let x = 3;
let y = 2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.roulognd(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);


let max = Math.max(x, y, z); 
let min = Math.min(x, y, z);
console.log(min);
*/

// RANDOM NUMBER GENERATOR //
/* 

const min = 50;
const max = 100;


let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum)

*/

/*
// make a dice // 
const myButton = document.getElementById(`myButton`);
const label1 = document.getElementById(`label1`);
const label2 = document.getElementById(`label2`);
const label3 = document.getElementById(`label3`);
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
*/




/*
// site que identifica o quao velho vc e//

const myText = document.getElementById(`myText`)
const mySubmit = document.getElementById(`mySubmit`)
const resultElement = document.getElementById(`resultElement`)
let age

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too OLD to enter this site`
    }
    
    else if(age == 0){
        resultElement.textContent = `You were just born!`
    }
    
    else if(age >= 18){
        resultElement.textContent = `Your are old enough to enter this site`
    }
    
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`
    }
    
    else{
        resultElement.textContent = `You must be 18+ to enter this site`
    }
}

*/



/*

// checked property //
const myCheckbox = document.getElementById(`myCheckbox`)
const visaBtn = document.getElementById(`visaBtn`)
const mastercardBtn = document.getElementById(`mastercardBtn`)
const paypalBtn = document.getElementById(`paypalBtn`)
const mySubmit = document.getElementById(`mySubmit`)
const subResult = document.getElementById(`subResult`)
const paymentResult = document.getElementById(`paymentResult`)

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with mastercard`
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal`
    }
    else{
        paymentResult.textContent = `Select a payment type`
    }

}

*/




/*
let age = 38;
//let message = age >= 18 ? "You are an adult" : "You are a minor";
let message;

if(age >= 18){
    message = `You are an adult`;
}
else{
    message =`ou are a minor`;
}

console.log(message)
*/

/*
let time = 10;
//let greeting = time < 12 ? `Good morning!` : `Good afternoon!`
let greeting;

if(time < 12){
    greeting = `Good morning!`
}
else{
    greeting = `Good afternoon!`
}

console.log(greeting)
*/

/* 
let isStudent = true;
//let message = isStudent ? `You are a student` : `ou are NOT a student`;
let message;

if(isStudent){
    message = `You are a student`
}
else{
    message = `You are not a student`
}

console.log(message);
*/

/*
let purchaseAmount = 290;
// let discount = purchaseAmount >= 100 ? `10` : `0`;

if(purchaseAmount >= 100){
    discount = 10;
}
else{
    discount = 0;
}

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)
*/






/*
let day = 3;
switch(day){
    case 1:
        console.log(`It is Monday`);
        break;
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wednesday`);
        break;
    case 4:
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6:
        console.log(`It is Saturnday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default:
        console.log(`${day} is not a day`);
        break;
}
*/

/*
let testScore = 20;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = `A`;
        break;
    case testScore >= 80:
        letterGrade = `B`;
        break;
    case testScore >= 70:
        letterGrade = `C`;
        break;
    case testScore >= 60:
        letterGrade = `D`;
        break;
    default:
        letterGrade = `F`
        break;
}

console.log(letterGrade);
*/




// string methods //
/*
let username = `FLXX`;
console.log(username.charAt(2));
console.log(username.indexOf("X"));
console.log(username.lastIndexOf("X"));
console.log(username.length);

username = username.toUpperCase();
username = username.repeat(3);
console.log(username)
*/
/*
let username = "FLX";
let result = username.includes(" ");

if(result){
    console.log(`Your username can't inclsude (space)`)
}
else{
    console.log(username)
}
*/
/*
let phonenumber = `123-456-7890`;
phonenumber = phonenumber.padEnd(15, `0`);
console.log(phonenumber);
*/


// STRING SLICING // 
/*
const fullName = `Flx caue`;
//let firstName = fullName.slice(0, 3);
//let lastName  = fullName.slice(4,8);
//let firstChar = fullName.slice()
let firstName = fullName.slice(0, fullName.indexOf(` `))
let lastName = fullName.slice(fullName.indexOf(` `) + 1)
console.log(firstName);
console.log(lastName);
*/
/*
const email = `Damn@gmail.com`;
let username = email.slice(0, email.indexOf(`@`));
let extension = email.slice(email.indexOf(`@`) +1);
console.log(username);
console.log(extension);
*/



// NO METHOD CHAINING //
/*
let username = window.prompt(`Enter your username: `);
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);
*/

// METHOD CHAINING //
/*
let username = window.prompt(`Enter your username: `);
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)
*/



// LOGICAL OPERATORS //
/*
const temp = 220;

if(temp > 0 && temp <= 30){
    console.log(`The weather is GOOD`)
}
else{
    console.log(`The weater is BAD`)
}

// && - and
// || - or
// ! - not 
*/



// WHILE LOOP //
/*
let username = "";
while(username === "" || username === null){
    username = window.prompt(`Enter your name:`);
}

console.log(`Hello ${username}`); 
*/
/*
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`)
    password = window.prompt(`Enter your password`)

    if(username === `myUsername` && password === `myPassword`){
        loggedIn = true
        console.log(`You are logged In`)
    }
    else{
        console.log(`Invalid credentials! Please try again`)
    }
}

*/


// FOR LOOP //
/*
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}
*/


// NUMBER GUESSING GAME //
/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number!`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number!`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`TOO LOW! TRY AGAIN!`);
        }
        else if(guess > answer){
            window.alert(`TOO HIGH! TRY AGAIN!`)
        }
        else{
            window.alert(`CORRECT! The answer is ${answer}. It tooks to you ${attempts} attempts!`)
            running = false;
        }
    }
}
*/


// FUNCTIONS // -- Love this part --
/*
function happyBirthday(username, age){
    console.log(`Happy Birthday to you`);
    console.log(`Happy Birthday to you`);
    console.log(`Happy Birthday dear ${username}`);
    console.log(`Happy Birthday to you`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Flx", 19);
*/

/*
function add(x ,y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

    // u can use this too --- (  return number % 2 === 0 ? true : false;  )
}
function isValidEmail(email){
    if(email.includes(`@`)){
        return true;
    }
    else{
        return false
    }

    // u can do this w/ --- (  return email.includes(`@`) ?  true : false;  )
}
console.log(isValidEmail(`bro@fake.com`));
*/



// VARIABLE SCOPE // 
/*
let x = 3;

function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
*/



// Temperature conversion js //
/*
const textBox = document.getElementById(`textBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const result = document.getElementById(`result`);
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9 / 5 + 32);
        result.textContent = temp.toFixed(1) + `°F`;

    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = ((temp - 32) * (5 / 9));
        result.textContent = temp.toFixed(1) + `°C`;

    }
    else{
        result.textContent = `Select a unit`
    }
}
    */


// Temperature conversion js // V2 

/*
const textBox = document.getElementById(`textBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelsius = document.getElementById(`toCelsius`);
const submitBtn = document.getElementById(`submitBtn`);
const result = document.getElementById(`result`);
let temp;

submitBtn.onclick = function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9 / 5 + 32);
        result.textContent = temp.toFixed(2) + `°F`;
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + `°C`;
    }
    else{
        result.textContent = `Select a unit to convert`
    }
}

*/




// ARRAYS // and // a little bit of for loops // 


//fruits[3] = `Coconut`; 
// or - fruits.push(`Coconut`); // -- but it tooks the item to the end of array -- 
// fruits.pop(); // -- desapear w some item in array
// index = position in js

/*
let fruits = [`Apple`, `Orange`, `Banana`, `Coconut`];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/


/*
let cats = [`Yuki`, `Hanabi`, `Lya`];
for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}




/*
for(let i = 1; i <= 22; i++){

    if(i == 17){
        continue;
    }
    else{
        console.log(i);
    }
}
*/

/*

let cats = [`a`, `b`, `c`];
cats.sort();
for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

*/




// spread operator (...) to discompact a array for example // 

// with no (...) --> numbers = array ; with(...) --> numbers = bumbers now, because i discompact it // 

/*
let numbers = [1 ,2, 3, 4, 5];
let maximum = Math.max(...numbers); 
let minimum = Math.min(...numbers);
console.log(minimum);
*/

/*
let username = `CaueRast`;
let letters = [...username].join(`-`);
console.log(letters);
*/

/*
let fruits = [`Apple`, `orange`, `banana`];
let vegetables = [`carrots`, `celery`, `potatoes`];

let foods = [...fruits, ...vegetables];
console.log(foods);
*/


// rest parameters // 
/*
function sum(...numbers){
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    console.log(total);
  }
  
  sum(10, 20, 30, 40);
  // Resultado: 100
  */

/*
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;

console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]
*/

/*
function adultNumbers(...numbers) {
    const adults = numbers.filter(num => num >= 18);
    console.log(adults);
  }
  
  adultNumbers(10, 25, 30, 5, 50);
*/

/*
  function getMaxNumber(...numbers){
    return Math.max(...numbers);
  }
  console.log(getMaxNumber(10, 45, 22, 99, 7));
  */

  //🚨 Desafio Extra:
  //Agora cria a função getEvenNumbers usando filter + rest para retornar só os números pares!
  //Modelo:

/*
function getEvenNumbers(...numbers){
    return numbers.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers(10, 45, 22, 99, 7));

*/

/*
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log(`your total is $${total}`);
*/


/*
function sum(...numbers){
    let x = 0;
    for(let number of numbers){
         x += number;
    }
    return x;
}
const total = sum(1, 2, 3, 4, 5);
console.log(`your total is $${total}`);
*/

/*
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log(`your total is $${total}`);
*/

/*
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75, 100, 85, 90, 50);
console.log(total);
*/ 



// Combining Strings // 
/*
function combineStrings(...strings){
    return strings.join(` `);
}
const fullName = combineStrings(`Mr.`, `Spongebob`, `Squarepants`, `III`);
console.log(fullName);
*/

// ramdom password generator //

/*
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `0123456789`;
    const symbolChars = `!@#$%^&*()_-+=`;

    let allowedChars = ``;
    let password = ``;

    allowedChars += includeLowercase ? lowercaseChars : ``;
    allowedChars += includeUppercase ? uppercaseChars : ``;
    allowedChars += includeNumbers ? numberChars : ``;
    allowedChars += includeSymbols ? symbolChars : ``;

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

const passwordLenght = 92;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
console.log(`Generated password: ${password}`);
*/


// callbacks // 
/*

hello(wait);

function hello(callback){
    console.log(`Hello!`);
    callback();
}

function wait(){
    console.log(`Wait!`);
}
*/

/*

sum(displayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById(`myh1`).textContent = result;
}
*/




// forEach() // 

// -- for math -- // 
/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
    
}

function display(element){
    console.log(element);
}
*/

 // -- fruits -- // 
 /*
let fruits = [`apple`, `orange`, `banana`, `coconut`];

fruits.forEach(capitalize);
fruits.forEach(display);


function upperCase(element, index, array ){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array ){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array ){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}


function display(element){
    console.log(element);
}
*/



// .map() - accepts callback and applies that function to each element of an array, then return a new array // 
/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
} 

*/


/*
const students = [`spongebob`, `patrick`, `squidward`, `sandy`];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);


console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}
*/


/*
const dates = [`2024-1-10`, `2025-2-20`, `2026-3-20`];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split(`-`);
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

*/

// .filter() // 
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums)

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

*/


/*
const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);


console.log(adults);
console.log(children);


function isChild(element){
    return element < 18;
}

function isAdult(element){
    return element >= 18;
}
*/

/*
const words = [`apple`, `orange`, `banana`, `kiwi`, `coconut`, `pomegranate`];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);


console.log(shortWords);
console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
*/

// reduce method // 
/*
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`

function sum(previous, next){
    return previous + next;
}
*/

/*
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}
*/

// function declaration // - // function expressions // 

// d // 
/*
function hello(){
    console.log(`Hello`);
}
*/

// e //
/*
setTimeout(function(){
    console.log(`Hello`);
}, 3000);
*/


/*
const numbers = [1, 2, 3, 4, 5, 6];


const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
*/



// arrow functions => // (parameters) => some code // 

// standard mode // 
/*
const hello = function(){
    console.log(`Hello`);
}
hello();
*/


// using arrow => // 
/*
const hello = (name, age) =>
    {console.log(`Hello, ${name}!`); console.log(`You are ${age} years old`)};

hello(`FLX`, 18);
*/

// another ex // 
/*
setTimeout( () => console.log(`Hello`), 3000);
*/

// outher ex // 
/*
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
*/

// object = {key:value, function()} // 
/*
const person1 = {
    firstName: `SpongeBob`,
    lastName: `Squarepants`,
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log(`Hi! Im SpongeBob`)}, // legacy function
    eat: function(){console.log(`Im eating a krabby patty`)}, // legacy function
}

const person2 = {
    firstName: `Patrick`,
    lastName: `Star`,
    age: 24,
    isEmployed: false,
    sayHello: () => console.log(`Hey, im Patrick...`), // arrow fn
    eat: () => console.log(`Im eating roast beaf...`), // arrow fn
}
*/

// using THIS // 
// this = make reference to a object where THIS is used (the object depends on the immediate context person.name = this.name); // 

/*
const person1 = {
    name: `SpongeBob`,
    favFood: `Hamburguers`,
    sayHello: function(){console.log(`Hi! im ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
const person2 = {
    name: `Patrick`,
    favFood: `pizza`,
    sayHello: function(){console.log(`Hi! im ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();
*/



// constructor = special method for defining the properites and methods of objects.
/*
function car(make, model, year, color){
    this.make = make,
    this.model = model, 
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new car(`Ford`, `mustang`, 2024, `red`);
const car2 = new car(`chevrolet`, `camaro`, 2025, `blue`);

const car3 = {
    make: `Ford`,
    model: `Mustang`,
    year: 2024,
    color: `Red`,
    drive: function(){console.log(`You drive the ${this.model}`)}
}

const car4 = {
    make: `dodge`,
    model: `charger`,
    year: 2026,
    color: `silver`,
    drive: function(){console.log(`You drive the ${this.model}`)}
}
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive()

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
console.log(car4.color);
car4.drive();
*/


// class = provides a more structured and cleaner way to work with objects compared to tradicional contructor functions - ex. static keyword, encapsulation, inheritance.

/*
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
const product1 = new Product(`Shirt`, 19.99);
const product2 = new Product(`Pants`, 22.50);
const product3 = new Product(`underwear`, 100.00);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Your total is ${total.toFixed(2)}`);
*/


// static = word that defines properties or methods that belong to a class itself rather than the object created from that class (class owns anything static, not the object)

/*
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * Math.pow(radius, 2);
    }
}
console.log();
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
*/

/*
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User(`Spongebob`);
const user2 = new User(`Patrick`);
const user3 = new User(`Sandy`);

user1.sayHello();
user2.sayHello();
user3.sayHello();


User.getUserCount();
*/

// inheritance = allows a new class to inherit proprieties and methods from an existing class (parent -> child) - Helps with code resuability

/*
//clases//
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    checkedAlive(){
        if(this.alive){
            console.log(`This ${this.name} is alive`);
        }
        else{
            console.log(`This ${this.name} is not alive`);
        }
    }
}
// subclasses // or // inheritance // 
class Rabbit extends Animal{
    name = `rabbit`
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = `fish`
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = `hawk`
    fly(){
        console.log(`This ${this.name} is swimming`);
    }
}

// define a new animal // 
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// - alives - // 
fish.alive = false;

// check // 
fish.checkedAlive();
fish.eat();
fish.sleep();
fish.swim();
*/

// super = keyword is used in classes to call the contructor or acess the properties and methods of a parent (superclass) |  this = this object    super = the parent

/*
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal{ 
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit(`Brownie`, 1, 25);
const fish = new Fish(`Fish`, 2, 12);
const hawk = new Hawk(`Hawk`, 3 ,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
*/


// getter = special method that makes a poperty redable
// setter = special method that makes a poperty writeable
// validate and modify a value when reading/writing a property


/*
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error(`Width must be a positive number`)
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error(`Height must be a positive number`)
        }
    }

    get width(){
        return `${this._width.toFixed(2)} cm`;
    }
    get height(){
        return `${this._height.toFixed(2)} cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(2)} cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/


/*
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === `string` && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error(`First name must be a non-empty string`);
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === `string` && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error(`Last name must be a non-empty string`);
        }
    }

    set age(newAge){
        if(typeof newAge === `number` && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error(`Age must be a non-negative number`);
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullname(){
        return this.firstName + ` ` + this.lastName;
    }
    get age(){
        return this._age;
    }
}


const person = new Person(`Spongebob`, `Squarepants`, 30);


console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullname);
console.log(person.age);
*/


/*
// destructuring = extract values from arrays and objects then assign them to variables in a convenient way
// [] =  to perform a array destructuring
// {} =  to perform a object destructuring

// ex 1  // swap the value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// ex 2  // swap two elements in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// ex 3  // asign array elements to variables
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// ex 4  // extract values from objects
const person1 = {
    firstName: `SpongeBob`,
    lastName: `Squarepants`,
    age: 30,
    job: `Fry Cook`,
}

const person2 = {
    firstName: `Patrick`,
    lastName: `Star`,
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/


// ex 5 // destructure in function parameters
/*
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName: `SpongeBob`,
    lastName: `Squarepants`,
    age: 30,
    job: `Fry Cook`,
}

const person2 = {
    firstName: `Patrick`,
    lastName: `Star`,
    age: 34,
}

displayPerson(person1);
*/



// nested objects = Objects inside of other objects. Allows you to representant more complex data structures child object is enclosed by a Parent Object.
// Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfinishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}


console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.city);



for(const property in person.address){
    console.log(person.address[property]);
}
*/

/*
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person(`Spongebob`, 30, `124 Conch St.`, `Bikini Bottom`, `Int. Waters`);
const person2 = new Person(`Patrick`, 37, `128 Conch St.`, `Bikini Bottom`, `Int. Waters`);
const person3 = new Person(`Squidward`, 45, `126 Conch St.`, `Bikini Bottom`, `Int. Waters`);

console.log(person3.address.street);
*/


// Arrays of objects
/*
const fruits = [
    {name: `apple`, color: `red`, calories: 95}, 
    {name: `orange`, color: `orange`, calories: 45}, 
    {name: `banana`, color: `yellow`, calories: 105}, 
    {name: `coconut`, color: `white`, calories: 159}, 
    {name: `pineapple`, color: `yellow`, calories: 37}
];


console.log(fruits[2].name); // show a especific patern

// push
fruits.push({name: `grapges`, color: `purple`, calories: 62}); // add a element to array

// pop
fruits.pop(); // remove the last array element

// splice (remove)
fruits.splice(1, 2); // remove a specifics array elements

// forEach
fruits.forEach(fruit => console.log(fruit.name)); // for each fruit in fruits, show the fruit(name)

// map -- show all the elements in a specific propriety (name) (color) (calories)
const fruitNames = fruits.map(fruit => fruit.name); // map a array fruits in name
const fruitColors = fruits.map(fruit => fruit.color); // map a array fruits in color
const fruitCalories = fruits.map(fruit => fruit.calories); // map a array fruits in calories
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// filter 
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); // show in array who element got a specific condition inside a propriety ( in case, the yellow color);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// reduce()
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(maxFruit);
console.log(minFruit);
*/




// sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical. 
// lexicographic = (alphabeti + numbers + symbols) as strings.

/*
let fruits = [`apple`, `orange`, `banana`, `coconut`, `pineapple`];
fruits.sort();

console.log(fruits);
*/

/*
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b); // ascending order
// numbers.sort((a, b) => b - a); // descending order
console.log(numbers);
*/

/*
const people = [
    {name: `Spongebob`, age: 30, gpa: 3.0}, 
    {name: `Patrick`, age: 37, gpa: 1.5}, 
    {name: `Squidward`, age: 51, gpa: 2.5}, 
    {name: `Sandy`, age: 27, gpa: 4.0}
]

people.sort((a, b) => a.gpa - b.gpa); // sort by gpa (number)
people.sort((a, b) => a.age - b.age); // sort by age (number)
people.sort((a, b) => a.name.localeCompare(b.name)); // sort by name (string)*

console.log(people);
*/

// Shuffle an array w/ Fisher-yates algorithm
/*
const cards = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`];
shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = cards.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
*/


// how to sort a random number in array
/*
const numbers = [10, 20, 30, 40, 50, 60];

const randomIndex = Math.floor(Math.random() * (numbers.length))
const randomNumber = numbers[randomIndex];

console.log(randomNumber)
*/


/*
// date objects - Date(year, month, day, hour, minute, second, ms)

// current date
const date = new Date();
console.log(date); // the current date

// or we can show the date in parts by using js functions
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate(); // day in number
//const dayWeek = date.getDay() // day in the week
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);

//we can set a date using functions
const date0 = new Date
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

// we can admit a date by following the extruture
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date1);

// we can admit a date by string
const date2 = new Date("2024-01-02T12:00:00");
console.log(date2);

// the 0 date - epic date
const date3 = new Date(0);
console.log(date3);

// 17000000000000ms after the epic date
const date4 = new Date(17000000000000);
console.log(date4);

//we can compare dates

const date5 = new Date("2024-12-31");
const date6 = new Date("2025-01-01");
if(date6 > date5){
    console.log("Happy new year!");
}
*/


// closure = a function defined inside of another function, the inner function has acces to the variables and scope of the outer function. Allow for private variables and state maintenance. Used frequently in JS frameworks: React, Vue, Angular.

/*
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner(); // first call the inner function to later call the outer function
}
outer();
*/

/*
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }


    return {increment, getCount}; // calling the inner functions 
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);
*/

/*
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        // score = score + points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        // score = score - points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
console.log(`The final score is ${game.getScore()}pts`)
*/


// setTimeout() = function in JS that allows you to schedule the execution of a function after an amount of time (ms). Times are approximate (varies based on the workload of the JS runtime env.)
// -- setTimeout(callback, delay)

/*
function sayHello(){
    window.alert("Hello")
}
setTimeout(sayHello, 3000);
*/

/*
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}
*/

// digital clock - w/ AM and PM // 
/*
function updateClock(){
    const now = new Date();
    let hours = now.getHours()
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
*/

// digital clock - normal // 
/*
function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
*/


// stopwatch // 
/*
const display = document.getElementById(`display`);
let timer = 0;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00:00`;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));
    let minutes = Math.floor((elapsedTime / (1000 * 60) % 60));
    let seconds = Math.floor((elapsedTime / 1000 % 60));
    let milliseconds = Math.floor((elapsedTime % 1000 / 10));
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    return display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
*/

// import and export functions from outher js file // 
// FILE 1 -- //
/*
export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}
export function getArea(radius){
    return PI * radius * radius;
}
export function getVolume(radius){
    return (4/3) * PI * (radius * radius * radius);
}
*/

// FILE 2 -- //
/*
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);
*/

// asynchronous // 
/*
function func1(callback){
    setTimeout(() => {console.log("Task1"); callback()}, 3000)
}
function func2(){
    console.log("Task2")
    console.log("Task3")
    console.log("Task4")
}

func1(func2);
*/

// error // 
/*
try{
    console.log(x);
}
catch(error){
    console.log(error);
}
finally{
    console.log(`This aways executes`);
}
console.log("You have reached the end!");
*/

/*
try{
    const dividend = Number(prompt(`Enter a dividend: `));
    const divisor = Number(prompt(`Enter a divisor: `));

    if(divisor == 0){
        throw new Error(`You can't divide by zero!`);
    }
    else if(isNaN(dividend) || isNaN(divisor)){
        throw new Error(`Values must be a number!`);
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
*/


// calculator program // 
/*

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error! (C)";
    }
}
*/

document.title = "FLX"
document.body.style.backgroundColor = "Black"
console.dir(document)

const username = ""
const welcomeMsg = document.getElementById("welcome-msg")
welcomeMsg.textContent += username === "" ? `Guest` : username;