import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
// import {BucketList} from "../bucket-list-details/bucket-list-details";
import { BucketLists } from './bucket-lists';


@Injectable()
export class BucketListsService {
  private apiUrl: string = environment.apiUrl;
  // bucketLists : BucketLists;
  // bucketlist : BucketList;

  constructor(private http: Http) { }

  getAllBucketLists(): Observable<BucketLists> {
    return this.http
      .get(`${this.apiUrl}/bucketlists`, {headers: this.getHeaders()})
      .map((response: Response) => response.json());
  }

  // getBucketList(id: number): Observable<BucketList> {
  //   return this.http
  //     .get(`${this.apiUrl}/bucketLists/${id}`, {headers: this.getHeaders()})
  //     .map((response: Response) => response.json());
  // }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsImlhdCI6MTQ5NDU3NDQzNiwiZXhwIjoxNDk1MTc5MjM2fQ.eyJpZCI6Mn0.TISfxUTeHnKc5e5dMfS13XAXmyz4mHsK113TQPnE02c');
    return headers;
  }

}


// console.log('Parsed bucketLists:', bucketLists$);
    // // return response;
    // return bucketLists$;


//   this.http.get(this._bucketlistUrl, { headers: this.addHeaders() })
// .map((response: Response) => <IBucketList[]>response.json())


// function mapBucketLists(response:Response): BucketList[] {
//   // The response of the API has a results
//   // property with the actual results
//   return response.json().results.map(toBucketList)
// }
//
// function toBucketList(r:any): BucketList {
//   let bucketlist = <BucketList>( {
//     id: r.id,
//     url: r.url,
//     name: r.name,
//     date_created: r.date_created,
//     date_modified: r.date_modified,
//   } );
//   console.log('Parsed bucketlist:', bucketlist);
//   return bucketlist;
// }

// to avoid breaking the rest of our app
// I extract the id from the person url
// function extractId(personData:any){
//   let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
//   return parseInt(extractedId);
// }

// function mapBucketList(response:Response): BucketList {
//   // toBucketList looks just like in the previous example
//   return toBucketList(response.json());
// }

// Bearer eyJhbGciOiJIUzI1NiIsImlhdCI6MTQ5NDM5MjIxNiwiZXhwIjoxNDk0NDc4NjE2fQ.eyJpZCI6Mn0.Q2uXMxkYSCUkSk9DLtlpwh68KOfUBFz7MESO-JQ9Svg
