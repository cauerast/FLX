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