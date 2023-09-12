const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const { email, password } = event.currentTarget.elements;

  const resultObj = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Всі поля форми повинні бути заповнені!");
  }

  console.log(resultObj);
  event.currentTarget.reset();
}
