const domUpdates = {
  userTitle: document.querySelector(".user-title"),
  navButtons: document.querySelector("nav"),
  usernameAlert: document.querySelector(".username-alert"),
  passwordAlert: document.querySelector(".password-alert"),
  invalidAlert: document.querySelector(".invalid-alert"),
  loginPage: document.querySelector("#login-page"),
  managerDashboard: document.querySelector(".manager-dashboard"),
  customerDashboard: document.querySelector(".customer-dashboard"),

  displayFullHeader(user) {
    this.userTitle.innerText = `${user}`;
    this.userTitle.classList.remove('hide');
    this.navButtons.classList.remove('hide');
  },

  // methods for login page
  resetLoginPage() {
    this.userTitle.classList.add('hide');
    this.navButtons.classList.add('hide');
    this.usernameAlert.classList.add('hide');
    this.passwordAlert.classList.add('hide');
    this.invalidAlert.classList.add('hide')
  },

  hideLoginPage() {
    this.loginPage.classList.add('hide')
  },

  addUsernameRequiredAlert() {
    this.usernameAlert.classList.remove('hide')
  },

  addPasswordRequiredAlert() {
    this.passwordAlert.classList.remove('hide')
  },

  removeUsernameRequiredAlert() {
    this.usernameAlert.classList.add('hide')
  },

  removePasswordRequiredAlert() {
    this.passwordAlert.classList.add('hide')
  },

  alertMessage(message) {
    console.log(message)
    this.invalidAlert.classList.remove('hide')
    this.invalidAlert.innerText = `${message}, please try again`;
  },

  //methods for manager dashboard
  displayManagerDashboard() {
    this.displayFullHeader("manager")
    this.managerDashboard.classList.remove('hide');
  },

  displayDateToday(dateToday) {
    const today = document.querySelector('.today');
    today.innerText = `${dateToday}`
  },

  displayNumRoomsAvailableToday(hotel) {
    const numRoomsAvailable = document.querySelector('.num-rooms-available');
    numRoomsAvailable.innerText = `${hotel.getNumRoomsAvailableToday()}`;
  },

  displayRevenueToday(hotel) {
    const totalRevenue = document.querySelector('.total-revenue');
    totalRevenue.innerText = `$${hotel.getRevenueToday()}`;
  },

  displayOccupancyRate(hotel) {
    const occupancyRate = document.querySelector('.occupancy-rate');
    occupancyRate.innerText = `${hotel.getOccupancyRateToday()}%`;
  },

  //methods for customer dashboard
  displayCustomerDashboard(username, name) {
    this.displayFullHeader(`${username} | ${name}`)
    this.customerDashboard.classList.remove('hide');
  },

  displayPastBookings(hotel, customerId) {
    const pastCard = document.querySelector('.past-card');
    const pastBookings = hotel.getCustomerPastBookings(customerId)
    pastCard.innerHTML = `<h3 class="past">Past</h3>`;
    pastBookings.forEach(pastBooking => {
      pastCard.innerHTML += `<p>date: ${pastBooking.date} </p>
      <p>roomNumber:</p>
      <p>roomType:</p>
      <p>bedSize</p>
      <p>numBeds</p>
      <p>costPerNight</p>`
    })
  },

  displayCurrentBookings() {

  },
  displayUpcomingBookings() {

  },

  displayRewardPoints() {

  },
}


export default domUpdates;