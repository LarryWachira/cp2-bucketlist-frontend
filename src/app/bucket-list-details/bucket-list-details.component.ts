import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { BucketListDetailsService } from "./bucket-list-details.service";
import { BucketListItem } from "./bucket-list-item";
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-bucket-list-items',
  templateUrl: './bucket-list-details.component.html',
  styleUrls: ['./bucket-list-details.component.css']
})


export class BucketListDetailsComponent implements OnInit {
  private apiUrl: string = environment.apiUrl;
  currentBucketList: string;
  id: number;
  body: Object;
  items: BucketListItem[] = [];
  selectedBucketListItem: BucketListItem;
  bucketListUrl: string;
  addBucketListItemUrl: string;
  errorMessage: any = '';
  isLoading: boolean = true;
  submitLoading: boolean;
  responseStatus: string;
  message: string;
  name: string;
  description: string;
  done: boolean;

  constructor(private _bucketListDetailsService: BucketListDetailsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getBucketList()
  }

  getBucketList() {

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.bucketListUrl = this.apiUrl + `/bucketlists/${this.id}`;
    this._bucketListDetailsService
      .getBucketListService(this.bucketListUrl)
      .subscribe(
        data => {
          this.currentBucketList = data.name;
          this.items = data.items;
        },
        error => this.errorMessage = error.json(),
        () => this.isLoading = false );
  }

  addBucketListItem() {
    this.submitLoading = true;
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.addBucketListItemUrl = this.apiUrl + `/bucketlists/${this.id}/items`;
    this._bucketListDetailsService
      .addItemService(this.addBucketListItemUrl, this.name, this.description, this.done)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.done = false;
          this.name = '';
          this.description = '';
          this.getBucketList();
        },
        error => {this.errorMessage = error.json();
        console.log(this.errorMessage)});
    this.submitLoading = false;
  }

  editBucketListItem() {
    this.submitLoading = true;
    this.body = {"name": this.selectedBucketListItem.name, "description": this.selectedBucketListItem.description,
      "done": this.selectedBucketListItem.done};

    this._bucketListDetailsService
      .updateItemService(this.selectedBucketListItem, this.body)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getBucketList();
        },
        error => this.errorMessage = error.json());
    this.submitLoading = false;
  }

  deleteBucketListItem(bucketlistitem: BucketListItem) {
    this.submitLoading = true;

    this._bucketListDetailsService
      .deleteItemService(bucketlistitem)
      .subscribe(
        data => {
          this.responseStatus = data;
          this.submitLoading = false;
          this.getBucketList();
        },
        error => this.errorMessage = error.json());
  }

  selectBucketListItem(item) {
    this.selectedBucketListItem = item;
  }

}
