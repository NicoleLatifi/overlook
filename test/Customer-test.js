import Customer from '../src/Customer';
// import chai from 'chai';
import { expect } from 'chai'

describe('Customer', function() {
  let customer1;
  let customer2;
  let customer3;
  let allCustomers;
  beforeEach(() => {
    customer1 = {"id": 1, "name": "Leatha Ullrich"};
    customer2 = {"id": 2, "name": "Rocio Schuster"};
    customer3 = {"id": 3, "name": "Kelvin Schiller"};
    allCustomers = [customer1, customer2, customer3]
  });

  it('should have a username', function() {
    const customer = new Customer("customer1");

    expect(customer.username).to.equal("customer1");
  })

});