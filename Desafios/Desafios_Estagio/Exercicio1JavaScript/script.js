"use strict";

const jose = {
  firstName: "José",
  age: 30,
  hasDriversLicense: true,
  nationality: "portuguese",

  calcAge: function () {
    this.ageDiference = this.age - 20;
    return this.ageDiference;
  },

  checkDriverLicense: function () {
    return `${this.firstName} is ${
      this.age >= 18 && this.hasDriversLicense === true ? "able" : "not able"
    } to drive, he ${
      this.nationality === "portuguese" ? "have" : "dont have"
    } a Portuguse Drivers License.`;
  },

  checkAge: function () {
    return `The diference from is age (${
      this.age
    }) to 20 years old is ${this.calcAge()} years`;
  },
};

if (jose.age >= 18 && jose.hasDriversLicense) {
  console.log(jose.checkDriverLicense());
  console.log(jose.checkAge());
} else {
  console.log(`${jose.firstName} is not able to drive...`);
}

if (jose.age < 10) {
  console.log(`${jose.firstName} age is less then 10 years old`);
} else if (jose.age >= 10 && jose.age <= 20) {
  console.log(`${jose.firstName} age is between 10 and 20 years old`);
} else {
  console.log(`${jose.firstName} age is more then 35 years old`);
}
