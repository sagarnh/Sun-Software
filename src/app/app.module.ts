import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsModule } from './about-us/about-us.module';
import { IndustriesModule } from './industries/industries.module';
import { CapabilitiesModule} from './capabilities/capabilities.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    HomeFeatureComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    AboutUsModule,
    IndustriesModule,
    CapabilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
