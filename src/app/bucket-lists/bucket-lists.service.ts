import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { BucketLists } from './bucket-lists';
import { BucketList } from "../bucket-list-details/bucket-list-details";


@Injectable()
export class BucketListsService {
  private apiUrl: string = environment.apiUrl;
  addBucketListUrl: string = this.apiUrl + '/bucketlists';
  body: Object;
  // bucketLists : BucketLists;
  // bucketlist : BucketList;

  constructor(private http: Http) { }

  getAllBucketListsService(): Observable<BucketLists> {
    return this.http
      .get(`${this.apiUrl}/bucketlists`, {headers: this.getHeaders()})
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
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsImlhdCI6MTQ5NDU3NDQzNiwiZXhwIjoxNDk1MTc5MjM2fQ.eyJpZCI6Mn0.TISfxUTeHnKc5e5dMfS13XAXmyz4mHsK113TQPnE02c');
    return headers;
  }

}

// .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
