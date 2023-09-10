const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const resultObj = { email, password };

  if (email.value === "" || password.value === "") {
    return alert("Всі поля форми повинні бути заповнені!");
  }

  console.log(resultObj);
  event.currentTarget.reset();
}
