import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from './authorization.service';
import { AppGlobals } from "../app.utils";

@Component({
  selector: 'app-authorization',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user : any;
  isLoading = false;
  errorMessage: any = '';

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private appGlobals: AppGlobals) { }

  ngOnInit() {
    // reset login status
    this.authorizationService.logout();
    this.appGlobals.setLoginStatus(false);
  }

  logIn(username: string, email: string, password: string) {
    this.isLoading = true;
    this.authorizationService.login(username, email, password)
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          this.isLoading = false;
          this.errorMessage = error.json()
        },
        () => {
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          this.appGlobals.setLoginStatus(true);
          this.appGlobals.setCurrentUser(this.user);
          this.router.navigate(['/bucketlists']);
        });
  }

}
