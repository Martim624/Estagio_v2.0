"use strict";

// localStorage.clear();

interface order {
  day: string;
  plate: string;
  price: number;
}

interface plate {
  Name: string;
  Day: string;
  Type: string;
  Price: number;
  img: string;
}

interface account {
  name: string;
  email: string;
  pass: string;
  isLogged: boolean;
  orders: order[];
}

// Plates
const plates: plate[] = [
  {
    Name: "Salmon",
    Day: "Monday",
    Type: "Fish",
    Price: 8,
    img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
  },
  {
    Name: "Lasagna",
    Day: "Monday",
    Type: "Meat",
    Price: 7,
    img: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg",
  },
  {
    Name: "Sardines",
    Day: "Tuesday",
    Type: "Fish",
    Price: 6,
    img: "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg",
  },
  {
    Name: "Chicken",
    Day: "Tuesday",
    Type: "Meat",
    Price: 5,
    img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
  },
  {
    Name: "Fish And Chips",
    Day: "Wednesday",
    Type: "Fish",
    Price: 5,
    img: "https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg",
  },
  {
    Name: "Hamburguer",
    Day: "Wednesday",
    Type: "Meat",
    Price: 4,
    img: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg",
  },
  {
    Name: "Sushi",
    Day: "Thursday",
    Type: "Fish",
    Price: 10,
    img: "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg",
  },
  {
    Name: "Spaghetti bolognese",
    Day: "Thursday",
    Type: "Meat",
    Price: 7,
    img: "https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg",
  },
  {
    Name: "Chicken",
    Day: "Friday",
    Type: "Meat",
    Price: 6,
    img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
  },
  {
    Name: "Fish Soup",
    Day: "Friday",
    Type: "Fish",
    Price: 7,
    img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg",
  },
];

// Scroll
const btnScrollTo = document.querySelector(
  ".btn--scroll-to"
)! as HTMLButtonElement;

// SCHEDULE
const section3 = document.querySelector("#section--3")!;
const schedule = document.querySelector(".schedule")! as HTMLDivElement;

// Modal declaration
const modal = document.querySelector(".modal")!;
const modalLogin = document.querySelector(".modal-login")!;
const overlay = document.querySelector(".overlay")!;

// Open and close declaration
const btnCloseModal = document.querySelector(".btn--close-modal")!;
const btnsOpenModal = document.querySelectorAll(".btn--show-modal")!;
const btnLogin = document.querySelectorAll(".show")!;
const btnClose = document.querySelector(".btn--close-modal-login");

// Buttons register,login and logoout
const register = document.querySelector(".btn--register")!;
const login = document.querySelector(".btn--login")!;
const logout = document.querySelector(".btn--logout")!;

let accountLogged: account;
let users: account[] = [];
let local = localStorage.getItem("users");

if (local) {
  users = JSON.parse(local);
}

// Funcions open and close
const openModal = function (e: Event) {
  // Event
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModalLogin = function (e: Event) {
  e.preventDefault();
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalLogin = function () {
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Modal Register Open/Close
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Modal Login Open/Close
btnLogin.forEach((btn) => btn.addEventListener("click", openModalLogin));
btnClose?.addEventListener("click", closeModalLogin);
overlay.addEventListener("click", closeModalLogin);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalLogin.classList.contains("hidden")) {
    closeModalLogin();
  }
});

// Register
register.addEventListener("click", function (e) {
  e.preventDefault();

  let fNameR = document.getElementById("firstnameRegister") as HTMLInputElement;
  let emailR = document.getElementById("emailRegister") as HTMLInputElement;
  let password = document.getElementById(
    "passwordRegister"
  ) as HTMLInputElement;

  if (fNameR.value == "" || emailR.value == "" || password.value == "") {
    alert("Please fill every fild");
    closeModal();
  } else if (users.find((a) => a.email === emailR.value)) {
    alert("Account already register");
  } else {
    users.push({
      name: fNameR.value,
      email: emailR.value,
      pass: password.value,
      isLogged: false,
      orders: [],
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
  closeModal();
});

// Login
login.addEventListener("click", function (e) {
  e.preventDefault();

  let emailLogin = document.getElementById("emailLogin") as HTMLInputElement;
  let passLogin = document.getElementById("passwordLogin") as HTMLInputElement;

  const testAccount = users.find(
    (findAccount) =>
      findAccount.email == emailLogin.value &&
      findAccount.pass == passLogin.value
  );

  if (testAccount) {
    accountLogged = testAccount;
    accountLogged.isLogged = true;
    closeModalLogin();
    loggedInterface();
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    alert("Incorrect account");
  }
});

// Logout
logout.addEventListener("click", function (e) {
  e.preventDefault();

  accountLogged.isLogged = false;
  logoutInterface();
  localStorage.setItem("users", JSON.stringify(users));
});

// Scrolling
btnScrollTo.addEventListener("click", function () {
  const section1 = document.querySelector("#section--1")!;
  section1.scrollIntoView({ behavior: "smooth" });
});

// Recive dates
// MON
document
  .getElementById("MondayMeat")!
  .addEventListener("change", (e) =>
    displayDate(e, "Meat", "Monday", "MondayFish")
  );
document
  .getElementById("MondayFish")!
  .addEventListener("change", (e) =>
    displayDate(e, "Fish", "Monday", "MondayMeat")
  );

// TUE
document
  .getElementById("TuesdayMeat")!
  .addEventListener("change", (e) =>
    displayDate(e, "Meat", "Tuesday", "TuesdayFish")
  );
document
  .getElementById("TuesdayFish")!
  .addEventListener("change", (e) =>
    displayDate(e, "Fish", "Tuesday", "TuesdayMeat")
  );

// WED
document
  .getElementById("WednesdayMeat")!
  .addEventListener("change", (e) =>
    displayDate(e, "Meat", "Wednesday", "WednesdayFish")
  );
document
  .getElementById("WednesdayFish")!
  .addEventListener("change", (e) =>
    displayDate(e, "Fish", "Wednesday", "WednesdayMeat")
  );

// THU
document
  .getElementById("ThursdayMeat")!
  .addEventListener("change", (e) =>
    displayDate(e, "Meat", "Thursday", "ThursdayFish")
  );
document
  .getElementById("ThursdayFish")!
  .addEventListener("change", (e) =>
    displayDate(e, "Fish", "Thursday", "ThursdayMeat")
  );

// FRI
document
  .getElementById("FridayMeat")!
  .addEventListener("change", (e) =>
    displayDate(e, "Meat", "Friday", "FridayFish")
  );
document
  .getElementById("FridayFish")!
  .addEventListener("change", (e) =>
    displayDate(e, "Fish", "Friday", "FridayMeat")
  );

// Functions
function displayDate(e: Event, type: string, days: string, change: string) {
  const changeDoc = document.getElementById(change) as HTMLInputElement;
  let target = e.target! as HTMLInputElement;
  changeDoc!.checked = false;

  if (target!.checked) {
    let order: order = { day: days, plate: type, price: 0 };

    let checkDay = accountLogged.orders.find((check) => check.day == days);

    if (checkDay) {
      let platePrice = plates.find(
        (plate) => plate.Day == checkDay!.day && plate.Type == checkDay!.plate
      );

      if (platePrice) {
        Object.assign(checkDay, { plate: type, price: platePrice.Price });
      }
    } else {
      let platePrice = plates.find(
        (plate) => plate.Day == order.day && plate.Type == order.plate
      );

      if (platePrice) order = { ...order, price: platePrice.Price };

      accountLogged.orders.push(order);
    }
  } else {
    accountLogged.orders = accountLogged.orders.filter(
      (findDays) => findDays.day !== days
    );
  }

  localStorage.setItem("users", JSON.stringify(users));
  checkPrices();
}

function addCheck() {
  accountLogged.orders.forEach((orderCheck) => {
    let orderDayPlate = document.getElementById(
      orderCheck.day + orderCheck.plate
    ) as HTMLInputElement | null;
    orderDayPlate!.checked = true;
  });
  checkPrices();
}

function removeCheck() {
  const list = document.querySelectorAll(
    "input[type=checkbox]"
  ) as NodeListOf<HTMLInputElement>;
  list.forEach((checkBox) => {
    checkBox.checked = false;
  });
}

// Check Prices
function checkPrices() {
  const priceTotal = document.querySelector(".summary__value--in");

  priceTotal!.textContent =
    accountLogged.orders
      .reduce((acc: number, cur: order) => acc + cur.price, 0)
      .toString() + "€";
}

function loggedInterface() {
  logout.classList.remove("hidden");
  btnLogin.forEach((a) => a.classList.add("hidden"));
  btnsOpenModal.forEach((a) => a.classList.add("hidden"));
  section3.classList.remove("hidden");
  schedule.classList.remove("hidden");
  addCheck();
}

function logoutInterface() {
  logout.classList.add("hidden");
  btnLogin.forEach((login) => login.classList.remove("hidden"));
  btnsOpenModal.forEach((login) => login.classList.remove("hidden"));
  section3.classList.add("hidden");
  schedule.classList.add("hidden");
  removeCheck();
}

function checkLogged() {
  let testAccount = users.find((logged) => logged.isLogged);

  if (testAccount) {
    accountLogged = testAccount;
    loggedInterface();
  } else {
    logoutInterface();
  }
}

// Display Plates
const displayPlates = function () {
  const containerPlates = document.querySelector(
    ".movements"
  ) as HTMLDivElement;
  containerPlates.innerHTML = "";

  plates.forEach((plate) => {
    const html = `
    <div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--deposit">${plate.Day}</div>
      <img src="${plate.img}" class="img-plate">
      <div class="movements__date">${plate.Name}</div>
      <div class="movements__value">${plate.Price} $</div>
      <div class="movements__row"> ${plate.Type}
      </div>
    </div>
    `;

    containerPlates.insertAdjacentHTML("beforeend", html);
  });
};

checkLogged();
displayPlates();
