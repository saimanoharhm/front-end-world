'use strict';

// Scoping
/*
function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1996 && birthYear <= 2005) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable.
      const firstName = 'rambo';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'sai';
calcAge(2001);
// console.log(age);
// printAge();
*/

// Hoisting and TDZ
// Variables
// console.log(me);
// console.log(job);
// console.log(year);
/*
var me = 'sai';
let job = 'programmer';
const year = 2001;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;
function deleteShoppingCard() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(z === window.z);
console.log(y === window.y);
console.log(x === window.x);
*/

// This Keyword
/*
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  // console.log(this);
};

calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  // console.log(this);
};

calcAgeArrow(2001);

const sai = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },
};

sai.calcAge();

const matilda = {
  year: 2001,
};

matilda.calcAge = sai.calcAge;
matilda.calcAge();

const f = sai.calcAge;
f();
*/
// var firstName = 'matilda';

// function declartions vs. Arrow functions
/*
const sai = {
  firstName: 'sai',
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    // solution - 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1996 && self.year <= 2005);
    //   // console.log(this.year >= 1996 && this.year <= 2005);
    // };
    // Solution - 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1996 && this.year <= 2005);
      // console.log(this.year >= 1996 && this.year <= 2005);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

sai.greet();
sai.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 5, 8, 7, 9);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 3);
addArrow(2, 3, 4, 8, 9);
*/

// Primitive vs. Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'sai',
  age: 20,
};

const friend = me;
friend.age = 27;
console.log('FRIEND: ', friend);
console.log('ME: ', me);

// Primitive types
let lastName = 'David';
let oldLastName = lastName;
lastName = 'sai';
console.log(lastName, oldLastName);

// Reference types
const sai = {
  firstName: 'sai',
  lastName: 'manohar',
  age: 27,
};

const marriedSai = sai;
marriedSai.lastName = 'devis';
console.log('Before Marriage: ', sai);
console.log('After Marriage: ', marriedSai);

// Copying objects
const sai2 = {
  firstName: 'sai',
  lastName: 'manohar',
  age: 27,
  family: ['rambo', 'ravi', 'hari'],
};

const saiCopy = Object.assign({}, sai2);
saiCopy.lastName = 'Davis';

saiCopy.family.push('mary');
saiCopy.family.push('john');

console.log('Before Marriage: ', sai2);
console.log('After Marriage: ', saiCopy);
