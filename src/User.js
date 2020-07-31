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
    let usernameRoot = this.username.slice(0, 8);
    let index8Code = this.username.charCodeAt(8);
    // let index9Code = this.username.charCodeAt(9);
    if (usernameRoot === "customer" && index8Code >= 48 && index8Code <= 57) {
      id = this.username.slice(8);
      userFound = this.allCustomers.customers.find(customer => {
        return customer.id == id
        }).name;
    } else if (usernameRoot === "manager") {
      userFound = "manager"
    } else {
      return "invalid username"
    }
   return userFound;
  }
}

export default User;