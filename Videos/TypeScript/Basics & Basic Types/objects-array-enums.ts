/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
}*/

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

const person = {
  name: "Martim",
  age: 17,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActiveties: string[];
favoriteActiveties = ["Sports"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); /// !!!ERROR!!! ////
}

if (person.role === Role.AUTHOR) {
  console.log("is AUTHOR");
}
