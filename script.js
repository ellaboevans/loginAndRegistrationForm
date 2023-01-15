const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const modal = document.querySelector(".modal");
console.log(modal);

let firstName = "Evans";
// alert(`Hello! ${firstName}`);

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
  console.log(e);

  checkInputs();
});

const showModal = () => {
  modal.classList.remove("show-modal");
  setTimeout(() => {
    modal.classList.add("show-modal");
  }, 3000);
};

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  if (usernameValue === "") {
    setError(username, "Provide a Username");
  } else {
    setSuccess(username);
    showModal();
  }

  if (emailValue === "") {
    setError(email, "Provie an Email Address");
  } else if (!isEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
    showModal();
  }

  if (passwordValue === "") {
    setError(password, "Provide a valid Password");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
    showModal();
  }

  if (confirmpasswordValue === "") {
    setError(confirmpassword, "Provide a valid Password");
  } else if (passwordValue !== confirmpasswordValue) {
    setError(confirmpassword, "Passwords does not match");
  } else {
    setSuccess(confirmpassword);
    showModal();
  }
}
