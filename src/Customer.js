import User from './User';

class Customer extends User {
  constructor(username, allCustomers, id) {
    super(username)
    this.id = id;
    this.allCustomers = allCustomers;
    this.name = this.getName();
  }

  getName() {
    const foundCustomer = this.allCustomers.find(customer => {
      return this.id === customer.id;
    });
    return foundCustomer.name;
  }
}

export default Customer;