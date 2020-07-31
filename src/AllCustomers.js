class AllCustomers {
  constructor(customers){
    this.customers = customers;
  }
    
  getCustomerIdByName(name) {
    //starting with array of objects with properties id and name
    //end result is one name
    //iterate over customers with find looking for where name === customer.name
    //this will return the full customer object
    //add .id to the end to get just the id
    return this.customers.find(customer => {
      return customer.name.includes(name)
      // return name === customer.name
    }).id
  }
}

export default AllCustomers;