class AllCustomers {
  constructor(customers){
    this.customers = customers;
  }
    
  getCustomerIdByName(name) {
    const foundCustomer = this.customers.find(customer => {
      return customer.name.includes(name)
    })
    if (foundCustomer === undefined) {
      return `No customer found with the name ${name}. Please try again.`
    } else {
      return foundCustomer.id
    }
  }
}

export default AllCustomers;