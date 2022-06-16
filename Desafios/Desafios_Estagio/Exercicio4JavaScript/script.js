"use strict";

const inventory = [
  "grapes",
  "bananas",
  "peaches",
  "bananas",
  "apples",
  "apples",
  "bananas",
];

const quantity = [2, 5, 3, 4, 6, 1, 9];

const allInventory = [];

inventory.forEach((el, i) => {
  const uniqueInv = inventory.filter((el3) => {
    return el3 === el;
  });

  const a = allInventory.find((el1, i1) => {
    return el === el1.nome;
  });

  const uniqueInvL = uniqueInv.length;

  if (uniqueInvL == 1) {
    quantity[i] *= 2;
  }

  const newProduct = {
    nome: el,
    quant: quantity[i],
  };

  if (!a) allInventory.push(newProduct);
  else a.quant += quantity[i];
});

console.log(allInventory);
