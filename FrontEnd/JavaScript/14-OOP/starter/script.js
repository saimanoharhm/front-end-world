'use strict';

//////////////////////////////////
// Constructor Functions and New Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2021 - birthYear);
  // };
};

const sai = new Person('sai', 2001);
console.log(sai);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2010);
const jack = new Person('Jack', 1998);
console.log(matilda, jack);

console.log(sai instanceof Person);

Person.hey = function () {
  console.log(this);
  console.log('Hey there 👋');
};
Person.hey();
// sai.hey();

// Prototypes
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

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(sai.species, matilda.species);

console.log(sai.hasOwnProperty('firstName'));
console.log(sai.hasOwnProperty('species'));

console.log(sai.__proto__);
// Object.prototype (top of prototype chain)
console.log(sai.__proto__.__proto__);
console.log(sai.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array = [] shortcut
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

///////////////////////////////
// ES6 Classes
// class Expressions
// const PersonCl = class {};

// class Declarations
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Hey there! 👋');
    console.log(this);
  }
}

const hari = new PersonCl('Hari Krishna', 2000);
console.log(hari);
hari.calcAge();
hari.age;

console.log(hari.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
hari.greet();
*/
// 1. Classes are NOT Hoisted (Can't use it before declare it.)
// 2. Classes are first-class citizens (You can pass it into a function and return it from a function)
// 3. Classes executed in strict mode

// const walter = new PersonCl('Walter', 1998);
// PersonCl.hey();

// Setters and Getters

const account = {
  owner: 'Sai',
  movements: [200, 530, 120, 300],

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

// Object.create()
/*
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const rambo = Object.create(PersonProto);
console.log(rambo);
rambo.name = 'Rambo';
rambo.birthYear = 2013;
rambo.calcAge();

console.log(rambo.__proto__ === PersonProto);

const rakesh = Object.create(PersonProto);
rakesh.init('Rakesh', 2000);
rakesh.calcAge();
*/
/*
Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
    return this;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
ford.speedUS = 300;
console.log(ford.speedUS);

// Inheritance Between "Classes": Constructor Functions

const PersonIn = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonIn.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  PersonIn.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

/* 
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
console.log(tesla);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static methods
  static hey() {
    console.log('Hey there! 👋');
    console.log(this);
  }
}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jonas', 2010, 'Computer Science');
martha.introduce();
martha.calcAge();

/////////////////////////////////////////////////////
/////// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const rambo = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

class Account {
  // 1) Public fields (instances)
  // locale = navigator.language;

  // 2) Private fields (instances NOT on prototype)
  // #movements = [];
  // #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
      return this;
    }
  }
  // 4) Private Methods
  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('Sai', 'INR', 1111);
acc1.deposit(2500);
acc1.withdraw(1400);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan());

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const teslaCl = new EVCl('Tesla', 120, 23);
teslaCl.chargeBattery(90);
teslaCl.accelerate();
teslaCl.brake();
console.log(teslaCl);

const rivian = new EVCl('Rivian', 210, 24);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(95)
  .accelerate();

console.log(rivian.speedUS);
