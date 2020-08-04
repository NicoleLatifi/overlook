import User from './User';

class Manager extends User {
  constructor() {
    super("manager")
  }

  deleteBooking() {
    const deleteBookingData = {"userID": 23, "date": "2020/05/13", "roomNumber": 5, "id": 1596516939279};
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteBookingData),
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

export default Manager;