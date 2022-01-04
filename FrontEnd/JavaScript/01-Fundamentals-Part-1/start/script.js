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
/*
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
*/
/*
// type conversion
const inputYear = "2001";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Sai"));
console.log(typeof NaN);

console.log(String(20), 20);

// type coercion
console.log("I am " + 20 + " years old!");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

console.log("10" - "4" - "3" - 2 + "5");
*/
/*
// truthy and falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Saimanohar"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all:)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/*
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (Loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) console.log("Cool! 23 is an amazing number!");
else if (favourite === 7) console.log("7 is also a cool number.");
else if (favourite === 9) console.log("9 is also a cool number.");
else console.log("Number is not 23 or 7 or 9");
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log("Rambo able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Rambo able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
/*
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const KoalasScore1 = 109;
const KoalasScore2 = 95;
const KoalasScore3 = 106;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins wins the trophy 🏆`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas wins the trophy 🏆`);
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`Both wins the trophy 🏆`);
} else {
  console.log("No one wins trophy 😭");
}
*/
/*
const age = 19;
const drink = age >= 18 ? "wine 🍷" : "Water 💧";
console.log(drink);

let drink2;
if (age >= 18) drink2 = "wine 🍷";
else drink2 = "Water 💧";

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "Water 💧"}`);
*/
/* 
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/

const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);
