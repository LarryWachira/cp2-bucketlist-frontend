import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { BucketListsComponent } from './bucket-lists/bucket-lists.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BucketListDetailsComponent } from './bucket-list-details/bucket-list-details.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BucketListsComponent,
    BucketListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
