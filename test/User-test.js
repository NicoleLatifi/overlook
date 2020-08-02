import AllCustomers from '../src/AllCustomers';
import User from '../src/User';
// import chai from 'chai';
import { expect } from 'chai'

describe.skip('User', function() {
  let customer1;
  let customer2;
  let customer3;
  let allCustomers;
  beforeEach(() => {
    customer1 = {"id": 1, "name": "Leatha Ullrich"};
    customer2 = {"id": 2, "name": "Rocio Schuster"};
    customer3 = {"id": 3, "name": "Kelvin Schiller"};
    allCustomers = new AllCustomers([customer1, customer2, customer3])
  });

  // it('Should be able to be instantiated by customer input name', function() {
  //   const username = "customer1"
  //   const user = new User(username, allCustomers)

  //   expect(user).to.be.an.instanceof(User);
  //   expect(user.name).to.equal("Leatha Ullrich");
  // });

  // it('Should be able to be instantiated by manager', function() {
  //   const username = "manager";
  //   const user = new User(username, allCustomers);

  //   expect(user).to.be.an.instanceof(User);
  //   expect(user.name).to.equal("manager");
  // })

  // it('Should alert a user if username is invalid', function() {
  //   const username = "customerA";
  //   const user = new User(username, allCustomers);

  //   expect(user.name).to.equal("invalid username");
  // })

}); 