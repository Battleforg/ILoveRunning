import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserModel } from '../models/userModel';
import { UserService } from '../services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {
  user = new UserModel(
    'D21ds12x',
    'cus22123',
    'Yi',
    'Li',
    'yili@yl.org',
    '123',
    'kkk');

  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('uid');
    this.userService.getUserById(uid)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        console.log('data: ', data);
        Object.assign(this.user, data.customer);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  goBack() {
    console.log('go back');
    this.router.navigate(['']);
  }

}
