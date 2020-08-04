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
  bookRoomPage: document.querySelector(".book-room-page"),
  selectDate: document.querySelector(".select-date-container"),

// hide pages
  hideLoginPage() {
    this.loginPage.classList.add('hide');
  },

  hideCustomerDashboard() {
    this.customerDashboard.classList.add('hide');
  },

  hideSelectDate() {
    this.selectDate.classList.add("hide");
  },

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
    // debugger
    const pastCard = document.querySelector('.past-card');
    const pastBookings = hotel.getCustomerPastBookings(customerId)
    pastCard.innerHTML = `<h3 class="past">Past</h3>`;
    if(typeof pastBookings === "string") {
      pastCard.innerHTML += `<p>${pastBookings}</p>`
    } else {
      pastBookings.forEach(pastBooking => {
        // const roomDetails = hotel.getRoomDetails(pastBooking);
        pastCard.innerHTML += `<p class="booking-top">Date: ${pastBooking.date} </p>
        <p class="booking-bottom">Room Number: ${pastBooking.roomNumber}</p>`
      })
      // <p>Type: ${roomDetails.roomType}</p>
      // <p>Bed Size: ${roomDetails.bedSize}</p>
      // <p>Number of Beds: ${roomDetails.numBeds}</p>
      // <p class="booking-bottom">Rate: $${roomDetails.costPerNight}/night</p> // This caused problems when clicking Bookings button, don't know why
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
        currentCard.innerHTML += `<p class="booking-top">Date: ${currentBooking.date} </p>
        <p class="booking-bottom">Room Number: ${currentBooking.roomNumber}</p>`
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
        upcomingCard.innerHTML += `<p class="booking-top">Date: ${upcomingBooking.date} </p>
        <p class="booking-bottom">Room Number: ${upcomingBooking.roomNumber}</p>`
      })
    }
  },

  displayRewardPoints(hotel, customerId) {
    const rewardPointsValue = document.querySelector(".reward-points-value");
    const totalSpent = hotel.getCustomerTotalSpent(customerId);
    rewardPointsValue.innerText = `${Math.floor(totalSpent)}`;
  },

  //methods for book room page
  displayBookRoomPage() {
    this.bookRoomPage.classList.remove("hide");
    //add if manager display delete button
  },

  displayAvailableRooms(hotel, date) {
    console.log(`DATE: ${date}`);
    const roomsAvailable = hotel.filterRoomsAvailableByDate(date);
    const availableRoom = document.querySelector(".available-room");
    availableRoom.innerHTML = `<h3>Rooms Available ${date}</h3>`;
    availableRoom.classList.remove("hide");
    if(roomsAvailable.length === 0) {
      availableRoom.innerHTML += `<p>No rooms available for this date. Kindly select another date.</p>`
    } else {
      roomsAvailable.forEach(room => {
        availableRoom.innerHTML += `<p class="booking-top">Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Number of Beds: ${room.numBeds}</p>
        <p>Rate: $${room.costPerNight}/night</p>
        <button class="book-room booking-bottom ${room.number}" data-date="${date}" type="button">Book Room</button>`
      })
    }
  }
}

export default domUpdates;