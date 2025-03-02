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
//let discount = purchaseAmount >= 100 ? `10` : `0`

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

