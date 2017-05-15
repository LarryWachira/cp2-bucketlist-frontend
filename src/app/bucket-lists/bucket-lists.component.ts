import { Component, OnInit } from '@angular/core';

import { BucketListsService } from "./bucket-lists.service";
import { BucketList } from "../bucket-list-details/bucket-list-details";


@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-lists.component.html',
  styleUrls: ['./bucket-lists.component.css']
})

export class BucketListsComponent implements OnInit {
  bucketLists : BucketList[];
  selectedBucketList: BucketList;
  message: string;
  // itemsNumber: number;
  responseStatus: number;
  // pages: number;
  submitLoading: boolean;
  errorMessage: any;
  isLoading: boolean = true;

  constructor(private _bucketListService: BucketListsService) {
  }

  ngOnInit(): void {
    this.getBucketLists()
  }

  getBucketLists(): void {
    this._bucketListService
      .getAllBucketListsService()
      .subscribe(
        data => {
          this.bucketLists = data.bucketlists;
        },
        error => this.errorMessage = error.json(),
        () => this.isLoading = false);
  }

  addBucketList(name: string): void {
    this.submitLoading = true;
    console.log(name);
    this._bucketListService
      .addBucketListService(name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getBucketLists();
        },
        error => this.errorMessage = error.json());
    this.submitLoading = false;
  }

  updateBucketList(bucketlist: BucketList, name: string): void {
    this.submitLoading = true;
    console.log(name);
    this._bucketListService
      .updateBucketListService(bucketlist, name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getBucketLists();
        },
        error => this.errorMessage = error.json());
    this.submitLoading = false;
  }

  deleteBucketList(bucketlist: BucketList): void {
    this.submitLoading = true;
    console.log(bucketlist);
    this._bucketListService
      .deleteBucketListService(bucketlist)
      .subscribe(
        data => {
          this.responseStatus = data;
          this.submitLoading = false;
          this.getBucketLists();
        },
        error => this.errorMessage = error.json());
  }

  selectBucketList(bucketList) {
    this.selectedBucketList = bucketList;
  }

}
