import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('openSide') side: ElementRef;
  @ViewChild('pushArea') push: ElementRef;
  toggle = true;
  constructor() { }

  ngOnInit() {
  }
  openNav() {

    if (this.toggle) {
      this.side.nativeElement.style.width = '250px';
      this.push.nativeElement.style.marginLeft = '258px';
    } else {
      this.side.nativeElement.style.width = '0px';
      this.push.nativeElement.style.marginLeft = '8px';
    }
    this.toggle = !this.toggle;
  }


}
