import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('openNavMenu') open: ElementRef;
  toggle = false;
  constructor() { }

  ngOnInit() {
  }
  openNav() {
    this.toggle = !this.toggle;
    if (this.toggle) {
    this.open.nativeElement.style.width = '250px';
       this.open.nativeElement.style.marginLeft = '250px';
    } else {
      this.open.nativeElement.style.width = '0px';
      this.open.nativeElement.style.marginLeft = '0';
    }
}

}
