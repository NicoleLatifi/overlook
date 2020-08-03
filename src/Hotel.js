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
      return revenue
    }, 0)
  }

  getOccupancyRateToday() {

  }
}

export default Hotel;