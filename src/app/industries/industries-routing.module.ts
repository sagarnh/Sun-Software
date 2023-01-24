import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyComponent } from './energy/energy.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { GovernmentServicesComponent } from './government-services/government-services.component';
import { IndustriesComponent } from './industries.component';
import { ProductServicesComponent } from './product-services/product-services.component';

const routes: Routes = [
  {
    path:'industries', component: IndustriesComponent,
    children: [
      { path:'energy', component: EnergyComponent },
      { path:'finance', component: FinancialServicesComponent },
      { path:'government', component: GovernmentServicesComponent},
      { path:'product', component: ProductServicesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
