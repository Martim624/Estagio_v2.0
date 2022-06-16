const names = ["João", "Maria", "Andreia", "Hugo", "Ana"];
const grades = [10, 12, 8, 16, 6];
const persons = [];
const positives = [];

let failed = 0;
let numberOfStudents = 0;
const BuildPersonsObject = () => {
  for (i = 0; i < names.length; i++) {
    persons.push({ firstName: names[i], grade: grades[i] }); // DONE;

    if (persons[i].grade >= 10) {
      positives.push(names[i]); // DONE
    } else {
      failed++;
    }

    if (persons[i].firstName.charAt(0) === "A") {
      numberOfStudents++;
    }
  }
};

const checkGrade = function (name, gradeCheck) {
  if (gradeCheck <= 9) {
    console.log(`${name} with ${gradeCheck} values so its a negative result `);
  } else if (gradeCheck >= 10) {
    console.log(`${name} with ${gradeCheck} values so its a ok result`);
  } else if (gradeCheck >= 13) {
    console.log(`${name} with ${gradeCheck} values so its a good result`);
  } else if (gradeCheck >= 16) {
    console.log(`${name} with ${gradeCheck} values so its a very good result`);
  } else if (gradeCheck >= 18 && gradeCheck <= 20) {
    console.log(`${name} with ${gradeCheck} values so its a excelent result`);
  }
};

BuildPersonsObject();
console.log(persons);
console.log(
  `Number of students that start with the letter A: ${numberOfStudents}`
);
console.log(positives);
console.log(`Number of students that have a bad grade: ${failed}`);
checkGrade("Tomás", Math.floor(Math.random() * 21));
