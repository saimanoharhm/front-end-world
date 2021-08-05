'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1990 && birthYear <= 2002) {
//       var millenial = true;
//       //Creating NEW variable with same name as outer scope's variable.
//       const firstName = 'Manohar';

//       //Reassigning outer scope's variable.
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3)); // It works only if you turned off the strict mode.
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Sai Manohar';
// calcAge(2001);

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'sai';
// let job = 'Programmer';
// const year = 2001;

//Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example
// console.log(undefined);
// if (!numProducts) deleteShoppingcart();

// var numProducts = 10;

// function deleteShoppingcart() {
//   console.log('All products deleted!');
// }

// var x = 4;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   //   console.log(this);
// };
// calcAge(2001);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(2001);

// const sai = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };
// sai.calcAge();

// const matilda = {
//   year: 2013,
// };

// matilda.calcAge = sai.calcAge; // Method browing

// matilda.calcAge();

// const sai = {
//   firstName: 'Sai',
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);

//     //solution-1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 2001 && self.year <= 2013);
//     //   // console.log(this.year >= 2001 && this.year <= 2013);
//     // };

//     //solution-2 // Arrow function inherits this keyword from hiparent scope.

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 2001 && this.year <= 2013);
//       // console.log(this.year >= 2001 && this.year <= 2013);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// sai.greet();
// sai.calcAge();

//Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 3, 5, 9);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 6, 9, 7);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'sai',
//   age: 19,
// };

// const friend = me;
// friend.age = 20;
// console.log('Friend: ', friend);
// console.log('Me', me);

//Primitive type
let lastName = 'Annam';
let oldLastName = lastName;
lastName = 'Manohar';
console.log(lastName, oldLastName);
//Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 19,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Annam';
console.log('Before marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 19,
  family: ['Sai', 'Manohar'],
};

const jessicaCopy = Object.assign({}, jessica2); //This will copy the object and create new .

jessicaCopy.lastName = 'Annam';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy);
