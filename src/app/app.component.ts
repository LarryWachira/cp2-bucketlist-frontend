import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import { BucketListsService } from "./bucket-lists/bucket-lists.service";
import { BucketListDetailsService } from "./bucket-list-details/bucket-list-details.service";
import { AuthorizationService } from "./authorization/authorization.service";
import { AppGlobals } from "./app.utils";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketListsService, BucketListDetailsService, AuthorizationService, AppGlobals]
})


export class AppComponent implements OnInit, OnDestroy{
  currentUser: Object;
  isLoggedIn: boolean = false;
  loginStatusSubscription: Subscription;
  currentUserSubscription: Subscription;

  constructor(private router: Router, private appGlobals: AppGlobals, private authorization: AuthorizationService) {
    this.loginStatusSubscription = this.appGlobals.getLoginStatus().subscribe(value => this.isLoggedIn = value);
    this.currentUserSubscription = this.appGlobals.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  ngOnInit() {
    this.getUser();
    if (this.getUser()){
      this.isLoggedIn = true
    }
  }

  getUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser
  }

  logOut() {
    this.authorization.logout();
    this.router.navigate(['/login']);
  }

  search(term: string) {
    this.appGlobals.setSearchTerm(term);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.loginStatusSubscription.unsubscribe();
    this.currentUserSubscription.unsubscribe();
  }

}
