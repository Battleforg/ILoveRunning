const CustomerModel = require('../models/model.customer');
let Vadlidator = require('fastest-validator');

let customers = {};
let counter = 0;

// create an instance of the validator
let customerValidator = new Vadlidator();

// validation pattern
let namePattern = /([A-Za-z\-\'])*/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z]+$/;

// static customer service
class CustomerService {
  static create(data) {

  }

  static retrieve(uid) {

  }

  static update(uid, data) {

  }

  static delete(uid) {

  }
}

module.exports = CustomerService;