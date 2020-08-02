class Hotel {
  constructor(bookingsData, roomsData, dateToday) {
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
    this.dateToday = dateToday;
  }

  getNumRoomsAvailableToday() {
    //bookingsData is array of objects, objects have date and roomNumber
    //roomsData is array of objects, objects have number
    //iterate over bookingsData with reduce
    //accumulator will be a counter
    //with every booking, if the date is dateToday, += 1 to accumulator
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
}

export default Hotel;