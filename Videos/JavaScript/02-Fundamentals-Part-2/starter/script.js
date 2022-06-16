'use strict';

/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = ` Juice with ${apples} apples and ${oranges
        } oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

const num = Number('23');

const dt = new Date();
let yearToday = dt.getFullYear();

function calcAge1(birthYear) {
    return yearToday - birthYear;
}

const ageToday = calcAge1(2005);

const calcAge2 = function (birthYear) {
    return yearToday - birthYear;
}

const age2 = calcAge2(1991);

console.log(ageToday, age2);

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const oragePieces = cutFruitPieces(oranges);
    const juice = ` Juice with ${applePieces} pieces of apples and ${oragePieces
        } pieces of oranges.`;
    return juice;
}

fruitProcessor(2, 3);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1950, 'Mike'));


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win with ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win with ${avgKoalas} vs ${avgDolphins}`);
    } else {
        console.log('No team wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(557, 111);


const friend1 = 'Michael';
const frient2 = 'Steven';
const friend3 = 'Peter';


const friends = ['Michael', 'Steven', 'Peter'];


console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';

const jonas = [firstName, 'Marques', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge1 = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(years2[0]);
const age2 = calcAge1(years2[1]);
const age3 = calcAge1(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge1(years2[0]), calcAge1(years2[1]), calcAge1(years2[years2.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

frineds.push('Jay');
console.log(friends);
console.log(newLength);

frineds.unshift('John');
console.log(friends);

friends.pop(); // Remote Last element
const popped = friends.pop();
console.log(popped);
connsole.log(friends);

friends.shift(); // Remote First Element
console.log(friends);

console.log(friends.indexOf('Steven')); // Show the position
console.log(friends);

console.log(friends.includes('Steven')); // Check if is in the array

friends.push(23);
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('Hey! Steven');
}


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];

console.log(bills, tips, totals);

const jonasArray = [
    'Jonas',
    'Marques',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Marques',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Marques',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);

console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas?');
console.log(jonas[interestedIn]);


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@test';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Marques',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    // }

    //calcAge: function () {
    // console.log(this);
    //  return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.age);
// console.log(jonas['calcAge'](1991));


console.log(jonas.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} BMI (${john.BMI}) `);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI}) `);
} else {
    console.log(`${john.fullName} BMI (${john.BMI}) is the same than ${mark.fullName} BMI (${mark.BMI}) `);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Number: ${rep}`);
}

const jonas = [
    'Jonas',
    'Marques',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// 

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
    'Jonas',
    'Marques',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let ex = 1; ex < 4; ex++) {
    console.log(`Start Ex - ${ex}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Ex: ${ex} Rep: ${rep}`);
    }
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Number: ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));