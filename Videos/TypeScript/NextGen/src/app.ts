// Code goes here!

//const userName = "Max";

//let age = 30;

// age = 29;

//  function add(a: number, b: number) {
//  let result;
//  result = a + b;
//  return result;
// }

/*
if (age > 20) {
  let isOld = true;
}

console.log(result); // Dont work because of the scope

const add = (a: number, b: number = 1) => a + b; // same as { return a + b} but only work if is one parameter

// console.log(add(2, 5));


const printOutput: (a: number | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5)); */

const hobbies = ["Sports", "Cooking"];

const extraHobbies = ["Surf", ...hobbies];

const activeHobbies = ["Coding"];

activeHobbies.push(...extraHobbies);

console.log(activeHobbies);

const person = {
  firstName: "Martim",
  age: 17,
  activeHobbies,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 20, 2.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remaningHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
