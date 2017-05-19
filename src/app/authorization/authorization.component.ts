import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})


export class AuthorizationComponent implements OnInit {
  isLoading = false;
  errorMessage: any = '';
  data: any;
  currentUser: object;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService) { }

  ngOnInit() {
    // reset login status
    this.authorizationService.logout();
  }

  logIn(username: string, password: string) {
    this.isLoading = true;
    this.authorizationService.login(username, password)
      .subscribe(
        data => {
          this.data = data;
          location.reload();
          this.router.navigate(['/bucketlists']);
        },
        error => {
          this.isLoading = false;
          this.errorMessage = error.json()
        });
  }

  // updateUser(): void {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.updateCurrentUser.emit(this.currentUser);
  //   console.log(this.currentUser)
  // }

}
