import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbdTableFiltering } from './components/table-filtering/table-filtering.component';
import { RunService } from './services/run.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreateRunComponent } from './components/create-run/create-run.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdTableFiltering,
    NavigationComponent,
    CreateRunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    RunService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
