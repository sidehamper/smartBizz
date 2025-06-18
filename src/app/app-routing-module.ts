import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard.component';
import { AuthGuard } from './auth.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MakeSaleComponent } from './make-sale/make-sale.component';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
   // Admin routes
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'admin/view-customers', component: ViewCustomerComponent, canActivate: [AuthGuard] },
  { path: 'admin/add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'admin/view-products', component: ViewProductComponent, canActivate: [AuthGuard] },
  { path: 'admin/make-sale', component: MakeSaleComponent, canActivate: [AuthGuard] },
  { path: 'admin/reports', component: ReportsComponent, canActivate: [AuthGuard] },

  // Employee routes
  { path: 'employee', component: EmployeeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'employee/view-customers', component: ViewCustomerComponent, canActivate: [AuthGuard] },
  { path: 'employee/view-products', component: ViewProductComponent, canActivate: [AuthGuard] },
  { path: 'employee/make-sale', component: MakeSaleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }