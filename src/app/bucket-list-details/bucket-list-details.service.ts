import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BucketList} from "./bucket-list-details";


@Injectable()
export class BucketListDetailsService {
  // bucketListUrl: string;
  // bucketLists : BucketLists;
  // bucketlist : BucketList;

  constructor(private http: Http) { }

  getBucketList(bucketListUrl: string): Observable<BucketList> {
    return this.http
      .get(bucketListUrl, {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsImlhdCI6MTQ5NDU3NDQzNiwiZXhwIjoxNDk1MTc5MjM2fQ.eyJpZCI6Mn0.TISfxUTeHnKc5e5dMfS13XAXmyz4mHsK113TQPnE02c');
    return headers;
  }
}
