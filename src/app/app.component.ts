import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import { BucketListsService } from "./bucket-lists/bucket-lists.service";
import { BucketListDetailsService } from "./bucket-list-details/bucket-list-details.service";
import { AuthorizationService } from "./authorization/authorization.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketListsService, BucketListDetailsService, AuthorizationService]
})


export class AppComponent implements OnInit{
  currentUser: Object;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.currentUser
  }

  // updateUser(currentUser: object):void {
  //   this.currentUser = currentUser
  // }

  logOut() {
    this.router.navigate(['/login']);
    location.reload()
  }

}
