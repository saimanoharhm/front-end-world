// Primitives: number, string, boolean
// More complex types: arrays,objects
// Function types, parameters

// Primitives

let age: number;
age = 20;

let userName: string | string[];
userName = "Sai";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Aliases
type Person = {
  name: string;
  age: number;
};

// let person: any;
let person: Person;

person = {
  name: "Sai",
  age: 20,
};

// person = {
//   isEmployee: true,
// };

// Combination of object and array type

let people: Person[];

// Type Inference

// Using Union Types
let course: string | number = "React - complete Guide";
course = 12341;

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
