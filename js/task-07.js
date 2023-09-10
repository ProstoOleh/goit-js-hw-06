const inputEl = document.querySelector("#font-size-control");
const textStyle = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  textStyle.style.fontSize = `${event.currentTarget.value}px`;
});