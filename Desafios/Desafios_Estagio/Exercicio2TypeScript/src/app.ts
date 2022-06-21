"use strict";

const malesNames: string[] = ["João", "Tomás", "Pedro", "Martim"];
const femaleNames = ["Inês", "Bruna", "Sara", "Isabela"];
const malesAge = [18, 20, 15, 23];
const femalesAge = [23, 18, 22, 20];

const adultsHTML = document.createElement("div");
const childsHTML = document.createElement("div");
const personsHTML = document.getElementById("persons");

interface allPersons {
  nome: string;
  age: number;
}

const allPersons1: allPersons[] = [];

malesNames.forEach((nome, index) => {
  allPersons1.push({ nome: nome, age: malesAge[index] });
});

femaleNames.forEach((nome, index) => {
  allPersons1.push({ nome: nome, age: femalesAge[index] });
});

allPersons1.forEach((all) => {
  if (all.age > 18) {
    adultsHTML.append(all.nome);
  } else {
    childsHTML.append(all.nome);
  }
});

personsHTML?.append(adultsHTML);
personsHTML?.append(childsHTML);
