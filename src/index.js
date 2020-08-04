
import './css/base.scss';
import domUpdates from './domUpdates';
import Customer from './Customer'
import Hotel from './Hotel';
import Manager from './Manager';
import moment from 'moment';

const body = document.querySelector("body");
const passwordInput = document.querySelector(".password-input");
const usernameInput = document.querySelector(".username-input");

let bookingsData;
let roomsData;
let customersData;
let dateToday = moment().format('YYYY/MM/DD');
let customer;
let hotel;
let manager;

window.onload = getData();
body.addEventListener("click", clickHandler);

function getData() {
  let bookings = getBookingsData();
  let rooms = getRoomsData();
  let customers = getCustomersData();
  Promise.all([bookings, rooms, customers]).then((values) => {
    bookingsData = values[0];
    roomsData = values[1];
    customersData = values[2];
    hotel = new Hotel(bookingsData.bookings, roomsData.rooms, dateToday);
  });
}

function getBookingsData() {
  return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
  .then(response => response.json())
  .catch(error => console.log(error));
}

function getRoomsData() {
  return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
  .then(response => response.json())
  .catch(error => console.log(error));
}

function getCustomersData() {
  return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
  .then(response => response.json())
  .catch(error => console.log(error));
}

function clickHandler() {
  if (event.target.classList.contains("submit")) {
    event.preventDefault();
    determineValidInput();;
  }
  if (event.target.classList.contains("book-a-room")) {
    loadBookRoomPage();
  }
  if (event.target.classList.contains("search-date")) {
    determineSearchDate();
    loadAvailableRoomsPage();
  }
}

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
    loginCustomer(usernameInput.value, inputId);
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

function loginCustomer(username, id) {
  clearForm();
  domUpdates.resetLoginPage()
  customer = new Customer(username, customersData.users, id)
  domUpdates.hideLoginPage();
  loadCustomerWelcomePage();
}

function loginManager() {
  clearForm();
  domUpdates.resetLoginPage();
  manager = new Manager(bookingsData);
  domUpdates.hideLoginPage();
  loadManagerDashboard();
}

function loadCustomerWelcomePage() {
  domUpdates.displayCustomerDashboard(customer.username, customer.name);
  domUpdates.displayPastBookings(hotel, customer.id);
  domUpdates.displayCurrentBookings(hotel, customer.id);
  domUpdates.displayUpcomingBookings(hotel, customer.id);
  domUpdates.displayRewardPoints(hotel, customer.id);
}

function loadManagerDashboard() {
  domUpdates.displayManagerDashboard();
  domUpdates.displayDateToday(dateToday);
  domUpdates.displayNumRoomsAvailableToday(hotel)
  domUpdates.displayRevenueToday(hotel);
  domUpdates.displayOccupancyRate(hotel);
}

function loadBookRoomPage() {
  domUpdates.hideCustomerDashboard();
  domUpdates.displayBookRoomPage();
}

function determineSearchDate() {
  const searchDateInput = document.querySelector(".date-selector")
  loadAvailableRoomsPage(searchDateInput.value);
  console.log(searchDateInput.value)
}

function loadAvailableRoomsPage(date) {
  domUpdates.hideSelectDate();
  domUpdates.displayAvailableRooms(hotel, date);
}