let userInput: any;
let userName: string;

userInput = 5;
userInput = "Max";
userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {} // INFITIVE LOOP
}

const error = generateError("An error occurred!", 500);

console.log(error);
