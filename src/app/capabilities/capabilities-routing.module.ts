import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapabilitiesComponent } from './capabilities.component';
import { CustomerDigitalComponent } from './customer-digital/customer-digital.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { OperationalExcellanceComponent } from './operational-excellance/operational-excellance.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { TechnologyTransformationComponent } from './technology-transformation/technology-transformation.component';

const routes: Routes = [
  {
    path:'capabilities', component: CapabilitiesComponent,
    children: [
      { path:'customer-digital', component: CustomerDigitalComponent },
      { path:'data-analytics', component: DataAnalyticsComponent },
      { path:'operational-excellance', component: OperationalExcellanceComponent},
      { path:'technology-transformation', component: TechnologyTransformationComponent },
      { path:'project-management', component: ProjectManagementComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapabilitiesRoutingModule { }
