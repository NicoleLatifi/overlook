// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

const body = document.querySelector("body");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");

let customer;
let manager;

body.addEventListener("click", clickHandler);

function clickHandler() {
  if (event.target.classList.contains("submit")) {
    event.preventDefault();
    determineUser();
  }
}

//maybe break into determineValidInput and determineUser functions
function determineUser() {
  let usernameInputRoot = usernameInput.value.slice(0, 8);
  let usernameInputId = usernameInput.value.slice(8);
  let inputId = parseInt(usernameInputId);
  if (usernameInputRoot === "customer" && inputId >= 1 && inputId <= 50) {
    loginCustomer(usernameInputRoot);
  } else if (usernameInputRoot === "manager") {
    loginManager(name);
  } else {
    alertMessage("invalid username");
  }
}

function alertMessage(message) {
  console.log(message)
}

function loginCustomer(name) {
  console.log(name)
}

function loginManager(name) {
  console.log(name)
}