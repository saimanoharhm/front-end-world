interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

// const printVehicle = (vehicle: Reportable): void => {
//   // console.log(`Name: ${vehicle.name}`);
//   // console.log(`Year: ${vehicle.year}`);
//   // console.log(`Broken? ${vehicle.broken}`);
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
