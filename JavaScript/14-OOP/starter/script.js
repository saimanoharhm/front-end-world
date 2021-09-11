'use strict';

// Constructor functions and new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

const sai = new Person('Sai Manohar', 2001);
console.log(sai);
// 1. New {}(empty object) is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2021);
const Jack = new Person('Jack', 2014);
console.log(matilda, Jack);

const rambo = 'Rambo';

console.log(sai instanceof Person);
console.log(rambo instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

sai.calcAge();
matilda.calcAge();

console.log(sai.__proto__);
console.log(sai.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sai));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
