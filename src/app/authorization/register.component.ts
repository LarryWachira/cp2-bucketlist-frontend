import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from './authorization.service';
import { UserRegister } from "./user-registration-details";

@Component({
  selector: 'app-authorization',
  templateUrl: './register.component.html',
  styleUrls: ['./authorization.component.css']
})


export class RegisterComponent implements OnInit {
  isLoading = false;
  errorMessage: any = '';
  data: any;

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService) { }

  ngOnInit() {
    // reset login status
    this.authorizationService.logout();
  }

  register(name: string, username: string, email: string, password: string, password_again: string) {
    this.isLoading = true;
    let user: UserRegister = {
      "name": name,
      "username": username,
      "email": email,
      "password": password,
      "password_again": password_again
    };
    this.authorizationService.registerUser(user)
      .subscribe(
        data => {
          this.data = data;
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMessage = error.json();
          this.isLoading = false;
        });
  }

}
