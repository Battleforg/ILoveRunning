class CustomerModel {
  constructor(uid, firstName, lastName, email, zipCode, password) {
    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.zipCode = zipCode;
    this.password = password;
  }
}

module.exports = CustomerModel;