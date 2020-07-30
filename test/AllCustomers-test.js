import AllCustomers from '../src/AllCustomers';
// import chai from 'chai';
import { expect } from 'chai'

describe('AllCustomers', function() {
  let customer1;
  let customer2;
  let customer3;
  beforeEach(() => {
    customer1 = {"id": 1, "name": "Leatha Ullrich"};
    customer2 = {"id": 2, "name": "Rocio Schuster"};
    customer3 = {"id": 3, "name": "Kelvin Schiller"};
    AllCustomers.customers.push(customer1, customer2, customer3)
  });

  it('Should hold all customers', function() {

    expect(AllCustomers.customers).to.deep.equal([
      {"id": 1, "name": "Leatha Ullrich"},
      {"id": 2, "name": "Rocio Schuster"},
      {"id": 3, "name": "Kelvin Schiller"}
    ]);
  });
});