"use strict";

const coords = [0, 2]; // this are the lat and long coordinates
const [lat, long] = coords;
console.log(`The lat value is: ${lat}`); //show here only the lat
console.log(`The long value is: ${long}`);

//Copy the following array to another array, and change any value on that new array without changing the original array

const arr = [1, 2];
const arrNew = [...arr];
console.log(arrNew);

//using to arr spread operator create a final array that is in the following format [1,5,6,2]
const a = [1, 2];
const b = [3, 4, 5, 6];
const [aN, bN] = a;
const [, , ...others] = b;
const finalArray = [aN, ...others, bN];
console.log(finalArray);

//having this object find the fastest way to create an new object just changing the value of the property name

const person = {
  name: "Ana",
  age: 18,
  nacionality: "Portugal",
};

const nameNew = { ...person, teste: "Teste" };
console.log(nameNew);

// uncomment and complete the code in order to print the two messages correctly

const func = ([, second, third]) => {
  console.log(`the second value is ${second}`);
  console.log(`the third value is ${third}`);
};

const testArr = [1, 2, 3];
func(testArr);
