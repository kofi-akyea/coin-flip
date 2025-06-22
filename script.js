const button = document.querySelector("button");
const attemptsNumber = document.getElementById("attempts");
const resetButton = document.getElementById("reset");

const resultDisplay = document.getElementById("result");
const coinDisplay = document.getElementById("coin");

let attemptsCount = 0;

function playGame() {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);

  if (randomNumber === 0) {
    resultDisplay.textContent = "Heads";
    coinDisplay.src = "./resources/heads.svg";
  } else {
    resultDisplay.textContent = "Tails";
    coinDisplay.src = "./resources/tails.svg";
  }

  attemptsCount += 1;
  attemptsNumber.innerText = `Attempts: ${attemptsCount}`;
}

function resetGame() {
  attemptsCount = 0;
  attemptsNumber.innerText = `Attempts: ${attemptsCount}`;
  resultDisplay.textContent = "";
  coinDisplay.src = "./resources/heads.svg";
}

button.addEventListener("click", playGame);
resetButton.addEventListener("click", resetGame);
