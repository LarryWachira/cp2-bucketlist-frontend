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
import { DateFormatPipe, RelativeDatePipe } from "./app.utils";
import { LoginComponent } from './authorization/login.component';
import { RegisterComponent } from "./authorization/register.component";
import { AuthorizationGuard } from "./authorization/authorization.guard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BucketListsComponent,
    BucketListDetailsComponent,
    RelativeDatePipe,
    DateFormatPipe,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent],
})


export class AppModule { }
