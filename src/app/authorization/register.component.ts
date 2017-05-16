import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorizationService } from './authorization.service';
import {UserRegister} from "./user-registration-details";

@Component({
  selector: 'app-authorization',
  templateUrl: './register.component.html',
  styleUrls: ['./authorization.component.css']
})


export class RegisterComponent implements OnInit {
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorizationService: AuthorizationService) { }

  ngOnInit() {
    // reset login status
    this.authorizationService.logout();
  }

  register(userModel: UserRegister) {
    this.isLoading = true;
    this.authorizationService.registerUser(userModel)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.isLoading = false;
        });
  }

}
