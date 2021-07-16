'use strict';

// const bookings = [];

// const createBooking = (flightNum, numPassengers = 1, price = 199) => {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

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

// const flight = 'LH234';
// const sai = {
//   name: 'SAI MANOHAR',
//   passport: 2547963241,
// };

// const checkIn = (flightNum, passenger) => {
//   (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);
//   if (passenger.passport === 2547963241) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport!');
//   }
// };
// checkIn(flight, sai);
// console.log(flight);
// console.log(sai);

// const newPassport = person => {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(sai);
// checkIn(flight, sai);

const oneWord = str => {
  return str.replace(/ /g);
};
