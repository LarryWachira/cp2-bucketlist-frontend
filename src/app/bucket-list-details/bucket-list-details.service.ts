import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {BucketList} from "./bucket-list-details";
import {BucketListItem} from "./bucket-list-item";


@Injectable()
export class BucketListDetailsService {

  constructor(private http: Http) { }

  // Get bucketlist
  getBucketListService(bucketListUrl: string): Observable<BucketList> {
    return this.http
      .get(bucketListUrl, {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  // Add a new bucket list item
  addItemService (addBucketListItemUrl: string, name: string, description?: string, done?: boolean): Observable<any> {
    let payload = JSON.stringify({ "name": name, "description": description, "done": done }); // Stringify payload
    return this.http.post(addBucketListItemUrl, payload, {headers: this.getHeaders()})
      .map((response:Response) => response.json());
  }

  // Update a bucket list item
  updateItemService (bucketListItem: BucketListItem, body: Object): Observable<any> {
    let payload = JSON.stringify(body); // Stringify payload

    return this.http.put(bucketListItem.url, payload, {headers: this.getHeaders()})
      .map((response:Response) => response.json());
  }

  // Delete a bucket list item
  deleteItemService (bucketListItem: BucketListItem): Observable<any> {
    return this.http.delete(bucketListItem.url, {headers: this.getHeaders()})
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
