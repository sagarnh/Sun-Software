import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    WhoWeAreComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
