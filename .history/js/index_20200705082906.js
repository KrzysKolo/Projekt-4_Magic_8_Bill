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
const shakeBall = () => {
  ball.classList.add("shake-animation");
};
const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?"';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakies pytanie";
    answer.textContent = "";
  }
};
const generateAnswer = () => {
  const number = Math.floor(Math.random() * answersArr.length);
  answer.innerHTML = `<span>Odpowiedź: </span>${answersArr[number]}`;
};
ball.addEventListener("click", shakeBall);
