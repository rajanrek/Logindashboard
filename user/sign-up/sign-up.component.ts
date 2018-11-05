import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  gender = ['Male', 'Female', 'Other'];
  usersModel = new Users('', '', 9999999999 , '' , '');

  submitted = false;
  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = false;

    // localStorage.name = this.loginModel.username;
    // localStorage.password = this.loginModel.password;
    // localStorage.clear();
  }
}
