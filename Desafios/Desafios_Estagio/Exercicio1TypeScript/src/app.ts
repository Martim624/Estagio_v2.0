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
    price: 1 * 0.1,
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

productsList.sort((a, b) => Number(a.price) - Number(b.price));

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

let change = moneyTotal - sumTotal;
let moneyKeep = change * 0.5;

console.log(moneyTotal);
console.log(sumTotal);
console.log(productsList);

// TO DO: the things she couldn't buy, what banknotes she will use

if (moneyTotal >= sumTotal) {
  console.log(
    `She have money to buy everything ${
      change > 0
        ? "and will recive " + change + " of change. She can keep " + moneyKeep
        : "but dont have change"
    }`
  );
} else {
  throw new Error("Go get money!");
}
