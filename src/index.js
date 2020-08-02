
import './css/base.scss';
import domUpdates from './domUpdates';
import Hotel from './domUpdates';
import Manager from './Manager';

const body = document.querySelector("body");
const passwordInput = document.querySelector(".password-input");
const usernameInput = document.querySelector(".username-input");

let bookingsData = [];
let customer;
let hotel;
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
  hotel = new Hotel(bookingsData);
}

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
  manager = new Manager(bookingsData);
  domUpdates.hideLoginPage();
  domUpdates.displayManagerDashboard();
}
