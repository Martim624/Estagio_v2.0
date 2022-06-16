let appId = "abc;";
const button = document.querySelector("button");

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clcikHandler(message: string) {
  // let userName =  "Max";
  console.log("Clicked!" + message);
}

if (button) {
  button.addEventListener("click", clcikHandler.bind(null, "You're welcome"));
}
