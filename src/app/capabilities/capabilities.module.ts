import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapabilitiesRoutingModule } from './capabilities-routing.module';
import { CustomerDigitalComponent } from './customer-digital/customer-digital.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { TechnologyTransformationComponent } from './technology-transformation/technology-transformation.component';
import { OperationalExcellanceComponent } from './operational-excellance/operational-excellance.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { CapabilitiesComponent } from './capabilities.component';


@NgModule({
  declarations: [
    CustomerDigitalComponent,
    DataAnalyticsComponent,
    TechnologyTransformationComponent,
    OperationalExcellanceComponent,
    ProjectManagementComponent,
    CapabilitiesComponent
  ],
  imports: [
    CommonModule,
    CapabilitiesRoutingModule
  ]
})
export class CapabilitiesModule { }
