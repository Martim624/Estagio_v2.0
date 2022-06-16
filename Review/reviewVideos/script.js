"use strict";

const person = {
  firstName: "Martim",
  birthYear: 2005,
  friends: ["Tomás", "Sara", "Bruna"],
  job: "teacher",
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSumary: function () {
    return `${this.firstName} is a ${
      this.age
    } years old ${this.calcAge()} and he ${
      this.hasDriversLicense ? "have" : "dont have"
    } drivers license`;
  },
};

console.log(
  `${person.firstName} has ${person.friends.length} friends and his best friend is ${person.friends[0]}`
);

person.calcAge();

console.log(person.getSumary());
console.log(person.age);
