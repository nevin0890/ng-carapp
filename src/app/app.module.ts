import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: '', component: AppComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
