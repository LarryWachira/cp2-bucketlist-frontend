import { Component, OnInit } from '@angular/core';

import { BucketListsService } from "./bucket-lists.service";
import { BucketList } from "../bucket-list-details/bucket-list-details";
import { BucketLists } from "./bucket-lists";


@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-lists.component.html',
  styleUrls: ['./bucket-lists.component.css']
})

export class BucketListsComponent implements OnInit {
  bucketLists : BucketList[] = [];
  selectedBucketList: BucketList;
  message: string;
  responseStatus: number;
  submitLoading: boolean;
  errorMessage: any;
  isLoading: boolean = true;
  bucketListName: string;
  bucketListsData: BucketLists;
  closeModal: boolean = false;

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
          this.bucketListsData = data;
          this.bucketLists = data.bucketlists;
        },
        error => this.errorMessage = error.json(),
        () => this.isLoading = false);
  }

  addBucketList(): void {
    this.submitLoading = true;
    this._bucketListService
      .addBucketListService(this.bucketListName)
      .subscribe(
        data => {
          this.message = data.message;
          this.bucketListName = '';
          this.getBucketLists();
        },
        error => this.errorMessage = error.json());
    this.submitLoading = false;
  }

  updateBucketList(): void {
    this.submitLoading = true;

    this._bucketListService
      .updateBucketListService(this.selectedBucketList, this.selectedBucketList.name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getBucketLists();
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
          this.getBucketLists();
        },
        error => this.errorMessage = error.json());
  }

  selectBucketList(bucketList) {
    this.selectedBucketList = bucketList;
  }

}
