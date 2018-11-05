import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/users';
import { Userclss } from 'src/app/userclss';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  submitted = false;
  constructor() { }

  usersModels = new Userclss('', '');

  ngOnInit() {
  }

  onsubmit() {
   this.submitted = false;
  }


}
