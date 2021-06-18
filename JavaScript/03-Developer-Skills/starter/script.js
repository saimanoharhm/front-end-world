// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(2001));

// const temperatures = [3, -2, -6, -1, 'error', 9, 5, 12, 4, 6, 8];

// const calTempAmplitude = temps => {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calTempAmplitude(temperatures);
// console.log(amplitude);

//Problem-2
//function should now receive 2 arrays of loops

// 1) Understanding the problems
// - with 2 arrays, should we implement functionality twice? No! just merge two arrays

//2) Breaking up into sub-problems
// - Merge 2 arrays

// const calTempAmplitude = (t1, t2) => {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const calTempAmplitudeBug = (t1, t2) => {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// //A) Identify
// console.log(amplitudeBug);

//Challenge-1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const printForecast = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + 'ºC in ' + (i + 1) + ' days...');
  }
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
