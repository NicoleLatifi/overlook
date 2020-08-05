import User from './User';

class Customer extends User {
  constructor(username, customersData, id) {
    super(username, customersData)
    this.id = id;
    // this.customersData = customersData;
    this.name = this.getName();
  }

  getName() {
    const foundCustomer = this.customersData.find(customer => {
      return this.id === customer.id;
    });
    return foundCustomer.name;
  }

  addBooking(date, roomNumber) {
    const postBookingData = {"userID": this.id, "date": date, "roomNumber": roomNumber};
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBookingData),
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}

export default Customer;