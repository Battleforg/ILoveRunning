const CustomerModel = require('../models/model.customer');
let Vadlidator = require('fastest-validator');

let customers = {};
let counter = 0;

// create an instance of the validator
let customerValidator = new Vadlidator();

// validation pattern
let namePattern = /([A-Za-z\-\'])*/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z]+$/;

// customer validator schema
const customerVSchema = {
  guid: { type: 'string', min: 3 },
  firstName: { type: 'string', min: 1, max: 50, pattern: namePattern },
  lastName: { type: 'string', min: 1, max: 50, pattern: namePattern },
  email: { type: 'string', max: 75 },
  zipCode: { type: 'string', max: 75 },
  password: { type: 'string', min: 2, max: 50, pattern: passwordPattern }
};

// static customer service
class CustomerService {
  static create(data) {
    var vres = customerValidator.validate(data, customerVSchema);

    // validation failed
    if (!(vres === true)) {
      let errors = {};
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        errors[element.field] = element.message;
      }
      throw {
        name: 'ValidationError',
        message: errors
      }
    }

    let customer = new CustomerModel('c' + counter++, data.firstName,
      data.lastName, data.email, data.zipCode, data.password);
    // In memory storage
    customers[customer.uid] = customer;

    return customer;
  }

  static retrieve(uid) {

  }

  static update(uid, data) {

  }

  static delete(uid) {

  }
}

module.exports = CustomerService;