// import AllCustomers from '../src/AllCustomers';

class User {
  constructor(username, allCustomers) {
    this.username = username;
    this.allCustomers = allCustomers;
    this.name = this.getName()
  };

  getName() {
    let id;
    let userFound;
    if (this.username.slice(0, 8) === "customer") {
      id = this.username.slice(8)
      userFound = this.allCustomers.customers.find(customer => {
        return customer.id == id
      }).name;
    } else if (this.username === "manager") {
      userFound = "manager"
    } else {
      return "Invalid username"
    }
   return userFound;
  }
}

export default User;