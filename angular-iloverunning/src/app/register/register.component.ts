import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../models/userModel';
import { Subject } from 'rxjs';
import { UserService } from '../services/user.service';
import { takeUntil, take } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    password1: '',
    password2: ''
  };
  guid: string;
  serviceErrors: any = {};

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.userService.getUID()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => {
        this.guid = response.guid;
      }, error => {
        console.log('There was an error generating the proper GUID on the server', error);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  invalidFirstName(): boolean {
    return this.serviceErrors.firstName !== undefined;
  }

  invalidLasttName(): boolean {
    return this.serviceErrors.lastName !== undefined;
  }

  invalidEmail(): boolean {
    return this.serviceErrors.email !== undefined;
  }

  invalidZipCode(): boolean {
    return this.serviceErrors.zipCode !== undefined;
  }

  invalidPassword(): boolean {
    return this.serviceErrors.password !== undefined;
  }

  // Check password
  checkPassword(): boolean {
    return (this.model.password1 === this.model.password2);
  }

  // submit new user's information
  onSubmit(): void {
    const newUser = {
      'firstName': this.model.firstName,
      'lastName': this.model.lastName,
      'email': this.model.email,
      'password': this.model.password1,
      'zipCode': this.model.zipCode
    };
    console.log(newUser);
    const data: any = Object.assign({ guid: this.guid }, newUser);
    this.userService.createUser(data)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(response => {
        console.log('response: ', response);
        const path = '/home/' + response.customer.uid;
        this.router.navigate([path]);
      }, error => {
        console.log('error: ', error);
        this.serviceErrors = error.error.error;
      });
  }

}
