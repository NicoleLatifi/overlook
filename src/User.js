// import AllCustomers from '../src/AllCustomers';

class User {
  constructor(username, customersData) {
    this.username = username;
    this.customersData = customersData
  }

  //This works in customer, can it go here?
  // addBooking() {
  //   const postBookingData = {"userID": 23, "date": "2020/05/13", "roomNumber": 5};
  //   fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(postBookingData),
  //   })
  //     .then(response => response.json())
  //     .catch(error => console.log(error));
  // }
}

export default User;