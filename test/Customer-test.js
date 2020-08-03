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
    const customer = new Customer("customer1", allCustomers, 1);

    expect(customer.username).to.equal("customer1");
  })

  it('should have an id', function() {
    const customer = new Customer("customer1", allCustomers, 1);

    expect(customer.id).to.equal(1);
  })

  it('should get its name', function() {
    const customer = new Customer("customer1", allCustomers, 1);

    expect(customer.name).to.equal("Leatha Ullrich");
  })

});