import AllCustomers from '../src/AllCustomers';
// import chai from 'chai';
import { expect } from 'chai'

describe('AllCustomers', function() {
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

  it('Should hold all customers', function() {
    expect(allCustomers.customers).to.deep.equal([
      {"id": 1, "name": "Leatha Ullrich"},
      {"id": 2, "name": "Rocio Schuster"},
      {"id": 3, "name": "Kelvin Schiller"}
    ]);
  });

  it('Should get customer Id by name', function() {
    const customerId = allCustomers.getCustomerIdByName("Leatha Ullrich");

    expect(customerId).to.equal(1);
  });

  it('Should get customer Id given partial name', function() {
    const customerId = allCustomers.getCustomerIdByName("Leatha");

    expect(customerId).to.equal(1);
  });


  it('Should give message when no customer is found', function() {
    const customerId = allCustomers.getCustomerIdByName("Nicole");

    expect(customerId).to.equal("No customer found with the name Nicole. Please try again.");
  })
}); 