import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {
    path:'about-us', component:AboutUsComponent,
    children: [
      {
        path:'who-we-are', component: WhoWeAreComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
