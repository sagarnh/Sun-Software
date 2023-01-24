import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { EnergyComponent } from './energy/energy.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { GovernmentServicesComponent } from './government-services/government-services.component';


@NgModule({
  declarations: [
    IndustriesComponent,
    EnergyComponent,
    FinancialServicesComponent,
    ProductServicesComponent,
    GovernmentServicesComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule
  ]
})
export class IndustriesModule { }
