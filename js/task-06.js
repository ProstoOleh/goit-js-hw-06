const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const inputValueEl = event.target.value.trim();
  if (inputValueEl.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
