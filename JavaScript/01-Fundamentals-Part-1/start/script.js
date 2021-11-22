/*let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

console.log("Sai");

let firstName = "Rambo";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
*/
// Variables declaration
/*
var job = "programmer";
job = "student";

lastName = "Manohar";
console.log(lastName);
*/

// Math Operators
/*
const now = 2021;
const ageSai = now - 2001;
const ageRambo = now - 2013;
console.log(ageSai, ageRambo);

console.log(ageSai * 2, ageSai / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Sai";
const lastName = "Manohar";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageSai > ageRambo); // > , <, >= , <=
console.log(ageRambo >= 18);

const isFullAge = ageRambo >= 18;
console.log(now - 2001 > now - 2013);
*/

/*
const now = 2021;
const ageSai = now - 2001;
const ageRambo = now - 2013;

console.log(now - 2001 > now - 2013);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageSai + ageRambo) / 2;
console.log(ageSai, ageRambo, averageAge);
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markHigherBMI;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  markHigherBMI = true;
} else {
  markHigherBMI = false;
}

console.log(markBMI, johnBMI);
console.log("Mark has a higher BMI than John is " + markHigherBMI);
*/
/*
const firstName = "Sai Manohar";
const job = "student";
const birthYear = 2001;
const currYear = 2021;
const sai =
  "I'm " +
  firstName +
  ", a " +
  (currYear - birthYear) +
  " years old " +
  job +
  "!";
const saimanohar = `I'm ${firstName}, a ${
  currYear - birthYear
} years old ${job}!`;
console.log(sai);
console.log(saimanohar);

console.log(`Just a normal String...`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines.`);

*/
/*
const age = 15;

if (age >= 18) console.log(`Rambo can start driving license.🚗`);
else {
  const yearsLeft = 18 - age;
  console.log(`Rambo is too young. Wait another ${yearsLeft} years:)`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//Coding Challenge - 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀
*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
let markHigherBMI;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
