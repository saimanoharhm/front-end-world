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
/*
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
*/
/*
const friends = ["sai", "manohar", "rambo", "hari"];

//Add Elements
const newLength = friends.push("mickel"); // Add at Last position
console.log(friends);
console.log(newLength);

friends.unshift("james"); // Add at Starting position
console.log(friends);

//Remove elements
friends.pop(); //Remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove first element
console.log(friends);

console.log(friends.indexOf("sai"));
console.log(friends.indexOf("saimanohar"));

friends.push(23);
console.log(friends);
console.log(friends.includes("sai"));
console.log(friends.includes("saimanohar"));

if (friends.includes("sai")) {
  console.log("You have a friend called sai.");
}
*/

/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀
*/
/*
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
*/
/*
const sai = {
  firstName: "sai",
  lastName: "manohar",
  age: 2021 - 2001,
  job: "programmer",
  friends: ["sai", "hari", "krishnam"],
};

console.log(sai);
console.log(sai.lastName);
console.log(sai["lastName"]);

const nameKey = "Name";
console.log(sai["first" + nameKey]); // USe Bracket Notation incase of having expressions
console.log(sai["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Sai? Choose between firstName, lastName, age, job and friends."
);

if (sai[interestedIn]) console.log(sai[interestedIn]);
else
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );

sai.location = "Hyderabad";
sai.twitter = "@saimanohar_hm";
console.log(sai);

//Challenge

console.log(
  `${sai.firstName} has ${sai.friends.length} friends, and his best friend is called ${sai.friends[1]}`
);
*/
/*
const sai = {
  firstName: "sai",
  lastName: "manohar",
  birthYear: 2001,
  job: "programmer",
  friends: ["sai", "hari", "krishnam"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(sai.calcAge());
console.log(sai.age);
console.log(sai.age);
console.log(sai.age);

// console.log(sai["calcAge"](2001));

//Challenge
// "Sai is a 20-year old programmer, and he has a driver's license."
console.log(sai.getSummary());
*/

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/
/*
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
  console.log(
    `${
      markMiller.fullName
    }'s (${markMiller.calcBMI()}) is higher than John's BMI (${johnSmith.calcBMI()})!`
  );
} else if (johnSmith.calcBMI() > markMiller.calcBMI()) {
  console.log(
    `${
      johnSmith.fullName
    }'s BMI (${johnSmith.calcBMI()}) is higher than Mark's (${markMiller.calcBMI()})!`
  );
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }
/*
const sai = [
  "sai",
  "manohar",
  2021 - 2001,
  "programmer",
  ["sai", "hari", "krishnam"],
  true,
];

const types = [];

for (let i = 0; i < sai.length; i++) {
  // Reading from sai array
  console.log(sai[i], typeof sai[i]);

  // Filling types array
  // types[i] = typeof sai[i];
  types.push(typeof sai[i]);
}

console.log(types);

const years = [2001, 2005, 1999, 1945];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages);

//Continue and break
console.log("-----ONLY STRINGS-----");
for (let i = 0; i < sai.length; i++) {
  if (typeof sai[i] !== "string") continue;
  console.log(sai[i], typeof sai[i]);
}

console.log("-----BREAK WITH NUMBER-----");
for (let i = 0; i < sai.length; i++) {
  if (typeof sai[i] === "number") break;
  console.log(sai[i], typeof sai[i]);
}
*/
/*
const sai = [
  "sai",
  "manohar",
  2021 - 2001,
  "programmer",
  ["sai", "hari", "krishnam"],
  true,
];

for (let i = sai.length - 1; i >= 0; i--) {
  console.log(i, sai[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}.`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
