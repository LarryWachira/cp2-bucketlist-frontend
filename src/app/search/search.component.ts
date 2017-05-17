import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";

import { AppGlobals } from "../app.utils";
import { BucketListsService } from "../bucket-lists/bucket-lists.service";
import { BucketLists } from "../bucket-lists/bucket-lists";
import { BucketList } from "../bucket-list-details/bucket-list-details";


let emptyBucketLists = {
  "bucketlists" : [],
  "total": null,
  "limit": null,
  "first_url": null,
  "last_url": null,
  "next_url": null,
  "prev_url": null,
  "page": null,
  "pages": null
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm: string;
  searchTermSubscription: Subscription;
  bucketLists: BucketList[] = [];
  results: BucketLists = emptyBucketLists;
  selectedBucketList: BucketList;
  message: string;
  responseStatus: number;
  submitLoading: boolean;
  errorMessage: any;
  isLoading: boolean = false;
  page: number;
  limit: number;


  constructor(private appGlobals: AppGlobals, private _bucketListService: BucketListsService) { }

  ngOnInit() {
    this.searchTermSubscription = this.appGlobals.getSearchTerm().subscribe(
      value => {this.searchTerm = value;
      this.getSearchResults(this.searchTerm, this.page, this.limit)
      });
  }


  getSearchResults(term: string, page: number, limit: number): void {
    this.isLoading = true;
    this._bucketListService
      .getAllBucketListsService(term, page, limit)
      .subscribe(
        data => {
          this.results = data;
          this.bucketLists = data.bucketlists;
          if(!term){this.searchTerm = null; this.results = emptyBucketLists}
        },
        error => {this.errorMessage = error.json();
        this.results = emptyBucketLists});
    this.isLoading = false
  }

  updateBucketList(bucketlist: BucketList, name: string): void {
    this.submitLoading = true;
    this.isLoading = true;
    this._bucketListService
      .updateBucketListService(bucketlist, name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getSearchResults(this.searchTerm, this.page, this.limit);
        },
        error => this.errorMessage = error.json());
    this.isLoading = false;
    this.submitLoading = false;
  }

  deleteBucketList(bucketlist: BucketList): void {
    this.submitLoading = true;
    this.isLoading = true;
    this._bucketListService
      .deleteBucketListService(bucketlist)
      .subscribe(
        data => {
          this.responseStatus = data;
          this.submitLoading = false;
          this.getSearchResults(this.searchTerm, this.page, this.limit);
        },
        error => this.errorMessage = error.json());
  }

  selectBucketList(bucketList) {
    this.selectedBucketList = bucketList;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.searchTermSubscription.unsubscribe()
  }

}
