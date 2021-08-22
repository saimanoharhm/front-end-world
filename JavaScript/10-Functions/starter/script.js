'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES6 default values
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const sai = {
//   name: 'Annam Sai Manohar',
//   passport: 24569874,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH4587';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24569874) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// checkIn(flight, sai);
// console.log(flight);
// console.log(sai);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = sai;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(sai);
// checkIn(flight, sai);

// const oneWord = function (str) {
//   // It removes all the spaces by using / /g it is basically a regular expression.
//   return str.replace(/ /g, ' ').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher Order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time.
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);
// ['Sai', 'Manohar', 'Hari'].forEach(high5);

// Functions returing functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Sai');
// greeterHey('Manohar');

// greet('Hello')('Sai');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Manohar');

// The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  lataCode: 'LH',
  bookings: [],
  // book : function(){}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight
    ${this.lataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.lataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Sai Manohar');
lufthansa.book(835, 'Annam Rambo');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  lataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Doesn't work
// book(23, 'Hari');
book.call(eurowings, 23, 'Hari');
console.log(eurowings);

book.call(lufthansa, 45, 'James');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  lataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Sai Manohar');
console.log(swiss);

//// Apply Method ///////
const flightData = [587, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind Method
// book.call(eurowings, 23, 'Hari');

const bookEW = book.bind(eurowings);
const bookLR = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Hari');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Annam Sai Manohar');
bookEW23('Rambo Annam');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addTax = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addtaxRate = rate => {
  return value => {
    return value + value * rate;
  };
};

const addvat = addtaxRate(0.23);
console.log(addvat(100));
console.log(addvat(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = prompt(`${this.question} \n${this.options}  `);
