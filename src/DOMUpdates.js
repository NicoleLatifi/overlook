const domUpdates = {
  userTitle: document.querySelector(".user-title"),
  navButtons: document.querySelector("nav"),
  usernameAlert: document.querySelector(".username-alert"),
  passwordAlert: document.querySelector(".password-alert"),
  invalidAlert: document.querySelector(".invalid-alert"),
  loginPage: document.querySelector("#login-page"),
  managerDashboard: document.querySelector(".manager-dashboard"),
  customerDashboard: document.querySelector(".customer-dashboard"),
  rewardPoints: document.querySelector(".reward-points"),

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
    this.displayFullHeader(`${username} | ${name}`);
    this.customerDashboard.classList.remove('hide');
    this.rewardPoints.classList.remove('hide');
  },

  displayPastBookings(hotel, customerId) {
    const pastCard = document.querySelector('.past-card');
    const pastBookings = hotel.getCustomerPastBookings(customerId)
    pastCard.innerHTML = `<h3 class="past">Past</h3>`;
    if(typeof pastBookings === "string") {
      pastCard.innerHTML += `<p>${pastBookings}</p>`
    } else {
      pastBookings.forEach(pastBooking => {
        const roomDetails = hotel.getRoomDetails(pastBooking);
        pastCard.innerHTML += `<p class="booking-top">Date: ${pastBooking.date} </p>
        <p>Room Number: ${pastBooking.roomNumber}</p>
        <p>Type: ${roomDetails.roomType}</p>
        <p>Bed Size: ${roomDetails.bedSize}</p>
        <p>Number of Beds: ${roomDetails.numBeds}</p>
        <p class="booking-bottom">Rate: $${roomDetails.costPerNight}/night</p>`
      })
    }
  },

  displayCurrentBookings(hotel, customerId) {
    const currentCard = document.querySelector('.current-card');
    const currentBookings = hotel.getCustomerCurrentBookings(customerId)
    currentCard.innerHTML = `<h3 class="current">Current</h3>`;
    if(typeof currentBookings === "string") {
      currentCard.innerHTML += `<p>${currentBookings}</p>`
    } else {
      currentBookings.forEach(currentBooking => {
        currentCard.innerHTML += `<p class="booking-top">date: ${currentBooking.date} </p>
        <p>roomNumber: ${currentBooking.roomNumber}</p>
        <p>roomType: ${currentBooking.roomType}</p>
        <p>bedSize: ${currentBooking.bedSize}</p>
        <p>numBeds: ${currentBooking.numBeds}</p>
        <p class="booking-bottom">costPerNight: ${currentBooking.costPerNight}</p>`
      })
    }
  },
  
  displayUpcomingBookings(hotel, customerId) {
    const upcomingCard = document.querySelector('.upcoming-card');
    const upcomingBookings = hotel.getCustomerUpcomingBookings(customerId)
    upcomingCard.innerHTML = `<h3 class="upcoming">Upcoming</h3>`;
    if(typeof upcomingBookings === "string") {
      upcomingCard.innerHTML += `<p>${upcomingBookings}</p>`
    } else {
      upcomingBookings.forEach(upcomingBooking => {
        upcomingCard.innerHTML += `<p class="booking-top">date: ${upcomingBooking.date} </p>
        <p>roomNumber: ${upcomingBooking.roomNumber}</p>
        <p>roomType: ${upcomingBooking.roomType}</p>
        <p>bedSize: ${upcomingBooking.bedSize}</p>
        <p>numBeds: ${upcomingBooking.numBeds}</p>
        <p class="booking-bottom">costPerNight: ${upcomingBooking.costPerNight}</p>`
      })
    }
  },

  displayRewardPoints(hotel, customerId) {
    const rewardPointsValue = document.querySelector(".reward-points-value");
    const totalSpent = hotel.getCustomerTotalSpent(customerId);
    rewardPointsValue.innerText = `${Math.floor(totalSpent)}`;
  },
}

export default domUpdates;