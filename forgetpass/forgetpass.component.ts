import { Component, OnInit } from '@angular/core';
import { Forget } from '../forget';




@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {


  constructor() { }

  forgetmodel = new Forget('');

  ngOnInit() {
  }

  onclick() {
    alert('your password has been sent on your registerd phone no');
  }
}
