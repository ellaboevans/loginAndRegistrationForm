const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const modal = document.querySelector(".modal");

const setError = (input, message) => {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = message;
  formControl.classList.add("error");

  formControl.classList.remove("success");
};

const setSuccess = (input) => {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = "";
  formControl.classList.add("success");

  formControl.classList.remove("error");
};

const isEmail = (email) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

  return regEx.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e)

  checkInputs();
});

const displayModal = () => {
  modal.classList.remove("show-modal");
  setTimeout(() => {
    modal.classList.add("show-modal");
  }, 3000);
};

function checkInputs() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Provide a valid Email ");
  } else if (!isEmail(emailValue)) {
    setError(email, "Not a valid email");
  } else {
    setSuccess(email);
    displayModal();
  }

  if (passwordValue === "") {
    setError(password, "Provide a valid Password");
  } else {
    setSuccess(password);
    displayModal();
  }
}
