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

  getRevenueToday() {
    //bookingsData is array of objects, objects have date and roomNumber
    //roomsData is array of objects, objects have number and costPerNight
    //iterate over bookingsData with reduce
    //accumulator will be revenue
    //with every booking, if date matches today's date:
    //iterate over roomsData and find room with matching id
    //take the costPerNight and add it to the accumulator
    return this.bookingsData.reduce((revenue, booking) => {
      if (booking.date === this.dateToday) {
        console.log("got one!")
        const roomFound = this.roomsData.find(room => {
          return booking.roomNumber === room.number;
        });
        revenue += roomFound.costPerNight;
      }
      return revenue
    }, 0)
  }
}

export default Hotel;