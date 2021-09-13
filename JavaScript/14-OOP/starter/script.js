'use strict';

// // Constructor functions and new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2021 - this.birthYear);
//   //   };
// };

// const sai = new Person('Sai Manohar', 2001);
// console.log(sai);
// // 1. New {}(empty object) is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2021);
// const Jack = new Person('Jack', 2014);
// console.log(matilda, Jack);

// Person.hey = () => {
//   console.log('Hey there 👋');
//   console.log(this);
// };

// Person.hey();

// const rambo = 'Rambo';

// console.log(sai instanceof Person);
// console.log(rambo instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// sai.calcAge();
// matilda.calcAge();

// console.log(sai.__proto__);
// console.log(sai.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(sai));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(sai.species, matilda.species);

// console.log(sai.hasOwnProperty('firstName'));
// console.log(sai.hasOwnProperty('species'));

// // Prototypal Inheritance on Built-In Objects
// console.log(sai.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(sai.__proto__.__proto__);
// console.log(sai.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 47, 8, 6, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK �
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const sai = new Car('Kia', 200);
// const rambo = new Car('Toyota', 140);

// sai.accelerate();
// sai.brake();
// rambo.accelerate();
// rambo.brake();

// Class Expression
// const PersonCl = class {}

//Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const sai = new PersonCl('Sai Manohar', 2001);
console.log(sai);
sai.calcAge();
console.log(sai.age);
PersonCl.hey();
console.log(sai.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// sai.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const account = {
  Owner: 'Sai',
  movements: [200, 45, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
