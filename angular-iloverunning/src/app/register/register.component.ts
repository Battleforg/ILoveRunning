import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password1: '',
    password2: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
