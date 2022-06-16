'use strict';

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

// Exercises
console.log(`Exercises GITHUB \n`);

// Exercise 1.1
console.log('\n');
console.log('Exercise 1.1: \n');
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(
  `e: ${e}\nPi: ${pi}\nGravity: ${gravity}\nHuman Body Temp: ${humanBodyTemp}\nWater Boiling Temp: ${waterBoilingTemp}`
);

// Exercise 1.2
console.log('--//--');
console.log(`Exercise 1.2:`);
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Exercise 1.3
console.log('--//--\nExercise 1.3:');
const { width, height, area, perimeter } = rectangle;
console.log(
  `Width:${width}\n Height: ${height}\nArea: ${area} Perimeter: ${perimeter}`
);

//////////////////////////777

// Exercise 2.1, 2.2
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
  if (skills.length < 2) {
    console.log(name);
  }
}

/////////////////////////////

