import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function newCard() {
  let suit = ["♦", "♥", "♠", "♣"];
  let number = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  let suitRandom = suit[randomNumber(suit)];
  let numberRandom = number[randomNumber(number)];

  let suitColor = "text-black";
  if (suitRandom == "♦" || suitRandom == "♥") {
    suitColor = "text-danger";
  };

  const suitGenerator = document.querySelector("#suit");
  suitGenerator.innerHTML = `<p class="${suitColor}">${suitRandom}</p>`;

  const numberGenerator = document.querySelector("#number");
  numberGenerator.innerHTML = numberRandom;

  const suitBottomGenerator = document.querySelector("#suit-bottom");
  suitBottomGenerator.innerHTML = `<p class="${suitColor}">${suitRandom}</p>`;
}

window.onload = function () {
  return newCard();
}

const button = document.querySelector("#click");
button.addEventListener("click", function () {
  return newCard();
});
