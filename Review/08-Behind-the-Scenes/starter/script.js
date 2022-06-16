'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const output = `${firstName} ,You are ${age}, born in  ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
    }
  }

  function add(a, b) {
    return a + b;
  }

  console.log(millenial);
  add(2, 3);
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
