import chai from 'chai';
const expect = chai.expect;

describe('Customers', function() {
  let customers = [];
  let customer1;
  let customer2;
  let customer3;
  beforeEach(() => {
    customer1 = {"id": 1, "name": "Leatha Ullrich"};
    customer2 = {"id": 2, "name": "Rocio Schuster"};
    customer3 = {"id": 3, "name": "Kelvin Schiller"};
    customers.push(customer1, customer2, customer3)
  }
  it('Should hold all customers', function() {

    expect().to.equal();
  });
});