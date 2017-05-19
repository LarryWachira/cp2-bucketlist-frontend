import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { environment } from '../../environments/environment';
import {UserRegister} from "./user-registration-details";


@Injectable()
export class AuthorizationService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: Http) { }

  registerUser(user: UserRegister): Observable<any> {
    return this.http.post(this.apiUrl + '/auth/register', JSON.stringify(user), {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  login(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/auth/login',
      JSON.stringify({ "username": username, "email": email , "password": password }),
      {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
