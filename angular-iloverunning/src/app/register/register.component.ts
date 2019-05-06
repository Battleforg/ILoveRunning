import { Component } from '@angular/core';
import { User } from '../entities/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password1: '',
    password2: ''
  };

  constructor() { }


  // Check password
  checkPassword(): boolean {
    return (this.model.password1 === this.model.password2);
  }

  // submit new user's information
  onSubmit(): void {
    const newUser = new User(
      this.model.firstName,
      this.model.lastName,
      this.model.email,
      this.model.password1,
      this.model.zipCode);
    // TODO: upload this user
    console.log(newUser);
  }


}
