import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { InsuranceFormComponent } from './components/insurance-form/insurance-form.component';
import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceFormComponent,
    InsuranceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
