"use strict";

interface guessObj {
  Tries: _;
}

let randomNumber = Math.floor(Math.random() * 100 + 1);

const guesses = document.getElementById("guesses") as HTMLParagraphElement;
const lastResult = document.querySelector(
  ".lastResult"
) as HTMLParagraphElement;
const lowOrHi = document.querySelector(".lowOrHi") as HTMLParagraphElement;
const guessSubmit = document.querySelector(".guessSubmit") as HTMLInputElement;
const guessField = document.querySelector(".guessField") as HTMLInputElement;

let resetButton: HTMLButtonElement;
let guessesObj = {
  Tries: 0,
  numberOfGamesPlayes: 1,
  numberOfWins: 0,
  Guesses: [],
};

guesses.textContent = "Previous guesses: ";

const checkGuess = () => {
  const userGuess = Number(guessField!.value);
  guessesObj.Guesses.push(userGuess);

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    guessesObj.numberOfWins++;

    return setGameOver();
  }

  if (userGuess !== randomNumber) {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";

    lowOrHi.textContent = `Last guess was too ${
      userGuess < randomNumber ? "low" : "high"
    }!`;

    guessesObj.Tries++;
    guessField.value = "";
    guessField.focus();
  }

  if (guessesObj.Tries === 3) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  }
};

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);

  guessesObj.numberOfGamesPlayes++;
  resetButton.addEventListener("click", resetGame);
};

const resetGame = () => {
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.remove();
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  guessesObj.Tries = 0;
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100 + 1);
};

guessSubmit?.addEventListener("click", checkGuess);
