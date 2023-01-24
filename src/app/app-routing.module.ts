import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'get-in-touch', component: ContactUsComponent},
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
