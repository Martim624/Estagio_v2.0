/*
let js = 'amazing';

console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";

console.log(firstName);


let jonas_matilda = "JM";
let $fuction = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob)


true;

let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

console.log(typeof null);


let age = 30;

age = 31;

const birthYear = 1991;

// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Marques';
console.log(lastName);



const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas , ageSarah);

console.log(ageJonas*2 , ageJonas/10,2**3);
// 2 ** 3 significa 2 elevado a 3 - 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Marques';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; 
x += 10; 
x *= 4; 
x++;
x--;
x--;
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;

const ageJonas = now - 1991;
const agrSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Test 1

const massMark = 78;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;

const markBMI =  massMark / heightMark ** 2;
const johnBMI =  massJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI,johnBMI,markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';

const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Test...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);



const age = 19;

if(age >= 18) {
    console.log('Sarah can drive!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cant drive. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if(birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(century);


const massMark = 78;
const massJohn = 95;
const heightMark = 1.69;
const heightJohn = 1.88;

const markBMI =  massMark / heightMark ** 2;
const johnBMI =  massJohn / heightJohn ** 2;


console.log(`Mark BMI: ${markBMI} \n\John BMI: ${johnBMI}`);

if(markBMI===johnBMI) {
    console.log(`Mark and John have the same BMI witch is ${markBMI}`);
} else if(markBMI > johnBMI) {
    console.log(`Mark has a higher BMI and his BMI is: ${markBMI}`);
} else {
    console.log(`John has a higher BMI and his BMI is: ${johnBMI}`);
}



const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // NaN = Not a Number

console.log(typeof NaN);

console.log(String(23), 23);

console.log(' I am' + 23 + ' years old');
console.log('23' - '10' - 3); // output 10
console.log('23' + '10' + 3); // output 23103
console.log('23' * '2'); // output 46
console.log('23' / '2'); // output 11.5


let n = '1' + 1;
n = n - 1;
console.log(n); // output 10


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should het a job!');
}

let height = 0;
if(height) { 
    console.log('Height is defined');
} else {
    console.log('Height is undefined');
}

const age = 18;
const ageCoersion = '18';

if (age === 18) console.log('You just became an adult(strint)');

if (ageCoersion == 18) console.log('You just became an adult(loose)');


// == do coersion === don't


// dont use == 

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
//} else {
//    console.log('Someone else should drive...');
//}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the thophy!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the thophy!');
} else {
    console.log('No team wins the trophy');
}

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}


if (23 > 10) {
    const str = '23 is bigger!';
}

const me = 'Jonas';

console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 23;

// age >= 18 ? console.log('I like to drink wine') :
// console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

 age >= 18 ? 'wine' : 'water'



const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; // if(bill<=300 && bill >= 50) ... 

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


*/
