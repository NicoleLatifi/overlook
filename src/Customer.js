import User from './User';

class Customer extends User {
  constructor(username, customersData, id) {
    super(username)
    this.id = id;
    this.customersData = customersData;
    this.name = this.getName();
  }

  getName() {
    const foundCustomer = this.customersData.find(customer => {
      return this.id === customer.id;
    });
    return foundCustomer.name;
  }
}

export default Customer;