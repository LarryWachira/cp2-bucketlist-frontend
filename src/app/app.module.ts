import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ClarityModule } from "clarity-angular";

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { BucketListsComponent } from './bucket-lists/bucket-lists.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BucketListDetailsComponent } from './bucket-list-details/bucket-list-details.component';
import {RelativeDatePipe} from "./app.utils";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BucketListsComponent,
    BucketListDetailsComponent,
    RelativeDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
