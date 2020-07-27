const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Tak",
  "Nie",
  "Może",
  "Ciężko powiedzieć...",
  "Nie chcesz tego wiedzieć..",
  "Zdecydowanie tak",
  "Przestań marzyć",
];
const generateAnswer = () => {
  const number = Math.floor(Math.random() * answersArr.length);
  answer.innerHTML = `<span>Odpowiedź: </span>${answersArr[number]}`;
};
ball.addEventListener("click", generateAnswer);
