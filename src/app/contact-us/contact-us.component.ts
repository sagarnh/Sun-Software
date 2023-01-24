import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor() {}
    ngOnInit(): void {}
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 51.507351,
        lng: -0.127758
    };
    zoom = 15
    ;
}
