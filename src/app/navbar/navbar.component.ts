import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showIcon: boolean = true; 
ngOnInit(){
 if(window.innerWidth > 992) {
  this.showIcon =  false;
 } else {
  this.showIcon =  true;
 }
}
@HostListener('window:resize', ['$event']) 
onWindowResize() {
  if(window.innerWidth > 992) {
    this.showIcon =  false;
   } else {
    this.showIcon =  true;
   }
}
enableMenu () {
  if(!(window.innerWidth > 992)) {
    this.showIcon = ! this.showIcon;
  }
}
}
