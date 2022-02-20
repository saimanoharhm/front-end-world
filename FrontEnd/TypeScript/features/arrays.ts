const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// const carByMake = [['f150'], ['corolla'], ['camaro']];
const carByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | String)[] = [new Date()];
importantDates.push('2022-02-20');
importantDates.push(new Date());
// importantDates.push(100); // Error because it's number.
