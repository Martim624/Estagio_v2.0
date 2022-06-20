interface Products {
  productName: string;
  price: number;

  discount?: number;
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
    price: 10,

    discount: 0.1,
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

const banknotes = [25, 2, 1];
let productsPriceFinal = 0;
let indexFinal = 0;
let lastProducts;

/* for (const products of Object.values(productsList)) {
  if (products.discount) {
    products.price *= products.discount;
  }
}
*/

productsList.forEach((obj) => {
  if (obj.discount) obj.price -= obj.price * obj.discount;
});

const moneyTotal = banknotes.reduce((ac: number, a: number) => {
  return ac + a;
}, 0);

let sumTotal = productsList.reduce((total: number, i: Products) => {
  // https://appdividend.com/2022/01/29/javascript-array-reduce/ | https://www.typescriptlang.org/docs/handbook/2/functions.html
  return total + i.price;
}, 0);

productsList.sort((a, b) => a.price - b.price);

/* 
let sumTotal = productsList
  .map((obj) => obj.price)
  .reduce(function (a: number, c: number) {
    return a + c;
  }, 0);

let sumTotal = productsList
  .map((obj) => obj.price)
  .reduce((a, c) => {
    return a + c;
  }); */

let change = moneyTotal - sumTotal;
let moneyKeep = change * 0.05;

// TO DO: the things she couldn't buy, what banknotes she will use

if (moneyTotal >= sumTotal) {
  console.log(
    `She have money to buy everything ${
      change > 0
        ? "and will recive " +
          change.toFixed(1) +
          " of change. She can keep " +
          moneyKeep.toFixed(1)
        : "but dont have change"
    }`
  );
} else {
  for (const [i, products] of Object.entries(productsList)) {
    productsPriceFinal += products.price;
    if (productsPriceFinal > moneyTotal) {
      indexFinal = Number(i);
      break;
    }
  }

  console.log("She couldn't buy everything!!");

  let last = productsList.slice(indexFinal, productsList.length);

  console.log("Items left to buy: ");
  console.log(last);
}
