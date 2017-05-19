import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { BucketLists } from './bucket-lists';
import { BucketList } from "../bucket-list-details/bucket-list-details";


@Injectable()
export class BucketListsService {
  private apiUrl: string = environment.apiUrl;
  addBucketListUrl: string = this.apiUrl + '/bucketlists';
  body: Object;

  constructor(private http: Http) { }

  getAllBucketListsService(q: string = '', page: number = 1, limit: number = 20): Observable<BucketLists> {
    return this.http
      .get(`${this.apiUrl}/bucketlists/?q=${q}&page=${page}&limit=${limit}`, {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  // Add a new bucket list
  addBucketListService(name: string): Observable<any> {
    this.body = { 'name': name };
    let payload = JSON.stringify(this.body); // Stringify payload

    return this.http.post(this.addBucketListUrl, payload, {headers: this.getHeaders()})
      .map((response:Response) => response.json());
  }

  // Update a bucket list
  updateBucketListService(bucketlist: BucketList, new_name: string): Observable<any> {
    this.body = { 'name': new_name };
    let payload = JSON.stringify(this.body); // Stringify payload

    return this.http.put(bucketlist.url, payload, {headers: this.getHeaders()})
      .map((response:Response) => response.json());
  }

  // Delete a bucket list
  deleteBucketListService(bucketlist: BucketList): Observable<any> {
    return this.http.delete(bucketlist.url, {headers: this.getHeaders()})
      .map((response:Response) => response.json());
  }

  private getHeaders() {
    let currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    let token: string = currentUser.token;
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return headers;
  }

}

// .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
