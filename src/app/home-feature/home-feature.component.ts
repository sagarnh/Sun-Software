import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $ :any;

@Component({
  selector: 'app-home-feature',
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.css']
})
export class HomeFeatureComponent implements OnInit{
  dynamicSlides = [
    {
      id: 1,
      src:'assets/images/1.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/1.png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/1.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/1.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/10.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit() {
   $(document).ready(() => {

   })
  }
}
