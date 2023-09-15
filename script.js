const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
function validateForm() {
  //using Constraint API
  isValid = form.checkValidity();
  //   Style main message for Error
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}
function processFormData(e) {
  e.preventDefault();
  console.log(e);
  //   Validate Form
  validateForm();
}
// Event Listener
form.addEventListener("submit", processFormData);