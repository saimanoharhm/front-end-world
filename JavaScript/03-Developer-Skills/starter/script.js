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

const calTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//A) Identify
console.log(amplitudeBug);
