import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../account/login/login.component';
import { SignupComponent } from '../account/signup/signup.component';
import { ChangeProviderComponent } from '../change-provider/change-provider.component';
import { DashboardComponent } from '../change-provider/dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import {CustomerComponent} from '../customer/customer.component';
import {DashboardCustomerComponent} from '../customer/dashboard-customer/dashboard-customer.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'account/login', component: LoginComponent},
    {path: 'account/register', component: SignupComponent},
    {path: 'change-provider', component: ChangeProviderComponent, children : [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
    ]},
  {path: 'customer', component: CustomerComponent, children : [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardCustomerComponent},
    ]},
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class ChangerRouteModule{
}
