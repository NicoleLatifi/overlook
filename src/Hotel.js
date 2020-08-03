class Hotel {
  constructor(bookingsData, roomsData, dateToday) {
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
    this.dateToday = dateToday;
  }

  getNumRoomsAvailableToday() {
    const numOfRooms = this.roomsData.length;
    const numRoomsBooked = this.bookingsData.reduce((roomCount, booking) => {
      if (booking.date === this.dateToday) {
        roomCount++;
      }
      return roomCount;
    }, 0)
    const numRoomsAvailable = numOfRooms - numRoomsBooked;
    return numRoomsAvailable;
  }

  getRevenueToday() {
    return this.bookingsData.reduce((revenue, booking) => {
      if (booking.date === this.dateToday) {
        const roomFound = this.roomsData.find(room => {
          return booking.roomNumber === room.number;
        });
        revenue += roomFound.costPerNight;
      }
      return Math.floor(revenue);
    }, 0)
  }

  getOccupancyRateToday() {
    const numOfRooms = this.roomsData.length;
    const numRoomsBooked = this.bookingsData.reduce((roomCount, booking) => {
      if (booking.date === this.dateToday) {
        roomCount++;
      }
      return roomCount;
    }, 0)
    const occupancyRate = Math.round(numRoomsBooked / numOfRooms * 100);
    return occupancyRate;
  }

  reformatDate(date) {
    const yyyy = date.substring(0, 4);
    const mm = date.substring(5, 7);
    const dd = date.substring(8);
    const reformattedDate = yyyy + mm + dd;
    return reformattedDate;
  }

  getCustomerPastBookings(customerId) {
    const pastBookings = this.bookingsData.filter(booking => {
      return this.reformatDate(booking.date) < this.reformatDate(this.dateToday) && booking.userID === customerId 
    })
    if (pastBookings.length === 0) {
      return "You have no past bookings."
    } else {
      return pastBookings
    }
  }

  getCustomerCurrentBookings(customerId) {
    const currentBookings = this.bookingsData.filter(booking => {
      return this.reformatDate(booking.date) === this.reformatDate(this.dateToday) && booking.userID === customerId 
    })
    if (currentBookings.length === 0) {
      return "You have no current bookings."
    } else {
      return currentBookings
    }
  }

  getCustomerFutureBookings(customerId) {
    const futureBookings = this.bookingsData.filter(booking => {
      return this.reformatDate(booking.date) > this.reformatDate(this.dateToday) && booking.userID === customerId 
    })
    if (futureBookings.length === 0) {
      return "You have no future bookings."
    } else {
      return futureBookings
    }
  }
}

export default Hotel;