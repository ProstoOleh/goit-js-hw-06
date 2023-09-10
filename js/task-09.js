const changeColorBtn = document.querySelector(".change-color");
const textOutput = document.querySelector(".color");
const bodyStyle = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = backgroundColor;
  textOutput.textContent = backgroundColor;
});