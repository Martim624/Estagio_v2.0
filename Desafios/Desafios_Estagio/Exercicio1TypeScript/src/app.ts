interface Products {
  productName: string;
  price: number;
}

const productsList: Products[] = [
  {
    productName: "Carrots",
    price: 1,
  },
  {
    productName: "Meat",
    price: 2,
  },
  {
    productName: "Fish",
    price: 4,
  },
  {
    productName: "Eggs",
    price: 1,
  },
  {
    productName: "Rice",
    price: 1,
  },
  {
    productName: "Sugar",
    price: 1,
  },
];

const banknotes = [10, 20, 5];

const moneyTotal = banknotes.reduce(function (ac: number, a: number) {
  return ac + a;
}, 0);

let sumTotal = productsList
  .map((obj) => obj.price)
  .reduce(function (a: number, c: number) {
    return a + c;
  }, 0);

/* let test = productsList.reduce(function (total: number, i: Products) { // https://appdividend.com/2022/01/29/javascript-array-reduce/ | https://www.typescriptlang.org/docs/handbook/2/functions.html
  console.log(`i: ${i.price}`);
  return total + i.price;
}, 0); */

/* let sumTotal = productsList
  .map((obj) => obj.price)
  .reduce((a, c) => {
    return a + c;
  }); */

console.log(productsList);
console.log(moneyTotal);
console.log(sumTotal);

if (moneyTotal >= sumTotal) {
  console.log("She can buy everything!");
} else {
  throw new Error("Go get money!");
}

// TO DO: Sort the list ( USE sort() ), discount on products, the things she couldn't buy, what banknotes she will use and if have change whats the change, money received by mom