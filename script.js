const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //using Constraint API
  isValid = form.checkValidity();
  //   Style main message for Error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  //   Check for password match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password1E2.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  //   If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}
// Store Form Data
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //   Do Something with User data
}

function processFormData(e) {
  e.preventDefault();
  console.log(e);
  //   Validate Form
  validateForm();
  //   Submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
// Event Listener
form.addEventListener("submit", processFormData);
