import User from './User';

class Customer extends User {
  constructor(username, id) {
    super(username)
    this.id = id;
    this.name = this.getName();
  }

  getName() {
    // if(this.username === customer1) {
    //   this.name = "Leatha Ullrich";
    // }
  }
}

export default Customer;