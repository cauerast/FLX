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
const min = 50;
const max = 100;


let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum)