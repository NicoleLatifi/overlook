import User from './User';

class Manager extends User {
  constructor(customersData) {
    super("manager", customersData);
  }

  getCustomerIdByName(name) {
    const foundCustomer = this.customersData.find(customer => {
      return customer.name.includes(name)
    })
    if (foundCustomer === undefined) {
      return `No customer found with the name ${name}. Please try again.`
    } else {
      console.log(foundCustomer.id)
      return foundCustomer.id
    }
  }

  getCustomerNameById(customerId) {
    const foundCustomer = this.customersData.find(customer => {
      return customerId === customer.id;
    });
    return foundCustomer.name;
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