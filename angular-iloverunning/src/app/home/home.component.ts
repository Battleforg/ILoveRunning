import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new UserModel('Yi', 'Li', 'yili@yl.org', '123', 'kkk');

  constructor() { }

  ngOnInit() {
  }

}
