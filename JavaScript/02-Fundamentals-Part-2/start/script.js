"use strict";
/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive :D");
*/

//Functions
/*
function logger() {
  console.log("My name is Annam Sai Manohar");
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
const age1 = calcAge1(2001);

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(2001);

console.log(age1, age2);

// Arrow Functions
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 61 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(2001, "Sai Manohar"));
*/
// Function calling another function
/*
const cutPieces = (fruit) => {
  return fruit * 4;
};
const fruitProcessor = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} orange pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 4));
*/
/*
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 61 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired. 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2001, "sai manohar"));
console.log(yearsUntilRetirement(1940, "rambo"));
*/
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return "No team wins...";
  }
};

let Dolphins = calcAverage(44, 23, 71);
let Koalas = calcAverage(65, 54, 49);
console.log(checkWinner(Dolphins, Koalas));

console.log(checkWinner(576, 111));

// TEST-2
Dolphins = calcAverage(85, 54, 41);
Koalas = calcAverage(23, 34, 27);
console.log(checkWinner(Dolphins, Koalas));
*/

const friend1 = "Bha";
const friend2 = "Hari";
const friend3 = "Raki";

const friends = ["Bha", "Raki", "Hari"];
console.log(friends);

const y = new Array(2001, 2004, 1998, 1999, 2000);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Rambo";
console.log(friends);

// friends = ["james", "ramu"];

const firstName = "sai";
const sai = [firstName, "Rambo", 2021 - 2001, "student", friends];
console.log(sai);
console.log(sai.length);

//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const years = [2001, 1998, 1725, 1836, 1987, 2005];
calcAge(years[2]);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
