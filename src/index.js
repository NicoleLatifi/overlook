// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');


import domUpdates from './domUpdates';

const body = document.querySelector("body");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");

let customer;
let manager;

window.onload = domUpdates.resetLoginPage;
body.addEventListener("click", clickHandler);

function clickHandler() {
  if (event.target.classList.contains("submit")) {
    event.preventDefault();
    determineValidInput();
  }
}

//maybe break into determineValidInput and determineUser functions

function determineValidInput() {
  if (usernameInput.value.length === 0) {
    domUpdates.addUsernameRequiredAlert();
  } else {
    domUpdates.removeUsernameRequiredAlert();
  }
  if (passwordInput.value.length === 0) {
    domUpdates.addPasswordRequiredAlert();
  } else if (passwordInput.value === "overlook2020") {
    determineUser();
  } else {
    alertMessage("invalid password");
  }
}

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

function clearForm() {
  firstInput.value = '';
  secondInput.value = '';
}

function loginCustomer(name) {
  clearForm();
  domUpdates.resetLoginPage()
  console.log(name)
}

function loginManager(name) {
  clearForm();
  domUpdates.resetLoginPage()
  console.log(name)
}