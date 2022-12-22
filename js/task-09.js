function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
console.log("change-color");

const getBody = document.querySelector(".body");
console.log("body");

const changeColor = document.querySelector(".color");
console.log("color");

btnChangeColor.addEventListener("click", () => {
  currentColor = getRandomHexColor();
  getBody.getElementsByClassName.backgraundcolor = currentColor;
  changeColor.textContent = currentColor;
}
)

