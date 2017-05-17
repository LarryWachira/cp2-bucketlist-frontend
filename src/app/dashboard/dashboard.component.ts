import { Component, OnInit } from '@angular/core';

import {BucketListsService} from "../bucket-lists/bucket-lists.service";
// import {BucketListItem} from "../bucket-list-details/bucket-list-item";
import {BucketList} from "../bucket-list-details/bucket-list-details";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentBucketLists: BucketList[] = [];
  // recentBucketListItems: BucketListItem;
  selectedBucketList: BucketList;
  message: string;
  responseStatus: number;
  submitLoading: boolean;
  errorMessage: any;
  isLoading: boolean = true;

  constructor(private _bucketListService: BucketListsService) { }

  ngOnInit() {
    this.getRecentlyModifiedBucketLists()
  }

  getRecentlyModifiedBucketLists(){
    this._bucketListService
      .getAllBucketListsService()
      .subscribe(
        data => {
          this.recentBucketLists = data.bucketlists.slice(0,4);
        },
        error => this.errorMessage = error.json(),
        () => this.isLoading = false);
    this.isLoading = false
  }

  //TODO: getRecentlyModifiedItems() {}

  updateBucketList(bucketlist: BucketList, name: string): void {
    this.submitLoading = true;

    this._bucketListService
      .updateBucketListService(bucketlist, name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getRecentlyModifiedBucketLists();
        },
        error => this.errorMessage = error.json());
    this.isLoading = false;
    this.submitLoading = false;
  }

  deleteBucketList(bucketlist: BucketList): void {
    this.submitLoading = true;

    this._bucketListService
      .deleteBucketListService(bucketlist)
      .subscribe(
        data => {
          this.responseStatus = data;
          this.submitLoading = false;
          this.getRecentlyModifiedBucketLists();
        },
        error => this.errorMessage = error.json());
  }

  selectBucketList(bucketList) {
    this.selectedBucketList = bucketList;
  }

}
