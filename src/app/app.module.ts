import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChangerRouteModule } from './routing/route.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ChangeProviderComponent } from './change-provider/change-provider.component';
import { DashboardComponent } from './change-provider/dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import {DashboardCustomerComponent} from './customer/dashboard-customer/dashboard-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChangeProviderComponent,
    DashboardComponent,
    CustomerComponent,
    DashboardCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChangerRouteModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
