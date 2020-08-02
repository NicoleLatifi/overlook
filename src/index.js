// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');


import domUpdates from './domUpdates';
import Manager from './Manager';

const body = document.querySelector("body");
const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
let bookingsData = [];

let customer;
let manager;

window.onload = getData();
body.addEventListener("click", clickHandler);

function getData() {
  getBookingsData();
}

function getBookingsData() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then(response => response.json())
    .then(data => storeBookingsData(data))
    .catch(error => console.log(error));
}

function storeBookingsData(data){
  bookingsData = data.bookings;
}

function clickHandler() {
  if (event.target.classList.contains("submit")) {
    console.log(bookingsData[1])
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
    domUpdates.alertMessage("invalid password");
    passwordInput.value = ''
  }
}

function determineUser() {
  let usernameInputRoot = usernameInput.value.slice(0, 8);
  let usernameInputId = usernameInput.value.slice(8);
  let inputId = parseInt(usernameInputId);
  if (usernameInputRoot === "customer" && inputId >= 1 && inputId <= 50) {
    loginCustomer(usernameInputRoot);
  } else if (usernameInputRoot === "manager") {
    loginManager();
  } else {
    domUpdates.alertMessage("invalid username");
    usernameInput.value = ''
  }
}

function clearForm() {
  usernameInput.value = '';
  passwordInput.value = '';
}

function loginCustomer(name) {
  clearForm();
  domUpdates.resetLoginPage()
  console.log(name)
}

function loginManager() {
  clearForm();
  domUpdates.resetLoginPage();
  manager = new Manager(allBookings);
  domUpdates.hideLoginPage();
  domUpdates.displayManagerDashboard();
}
