import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  },
  {
    path:'customer',
    component:CustomerComponent,
  },
  {
    path:'addcustomer',
    component:AddcustomerComponent,
  },
  {
    path:'listcustomer',
    component:ListcustomerComponent,
  },
  {
    path:'aboutus',
    component:AboutusComponent,
  },
  {
    path:'editcustomer/:id',
    component:EditcustomerComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }