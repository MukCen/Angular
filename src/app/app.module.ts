import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
import {  UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
      HttpClientModule
  ],
  providers: [ApiService,
    HttpClient,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
