import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule,
  MatListModule
} from '@angular/material';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
