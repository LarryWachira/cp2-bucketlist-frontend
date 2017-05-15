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
  bucketlist: string;
  id: number;
  body: Object;
  items: BucketListItem[] = [];
  selectedBucketListItem: BucketListItem;
  bucketListUrl: string;
  addBucketListItemUrl: string;
  errorMessage: string = '';
  isLoading: boolean = true;
  submitLoading: boolean;
  responseStatus: string;
  message: string;

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
          this.bucketlist = data.name;
          this.items = data.items;
        },
        error => this.errorMessage = error.json(),
        () => this.isLoading = false );
  }

  addBucketListItem(name: string) {
    this.submitLoading = true;
    console.log(name);
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.addBucketListItemUrl = this.apiUrl + `/bucketlists/${this.id}/items`;
    this._bucketListDetailsService
      .addItemService(this.addBucketListItemUrl, name)
      .subscribe(
        data => {
          this.message = data.message;
          this.submitLoading = false;
          this.getBucketList();
        },
        error => this.errorMessage = error.json());
    this.submitLoading = false;
  }

  editBucketListItem(bucketlistitem: BucketListItem, name: string, description: string, done: boolean) {
    this.submitLoading = true;
    this.body = {"name": name, "description": description, "done": done};

    console.log(name);
    this._bucketListDetailsService
      .updateItemService(bucketlistitem, this.body)
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
    console.log(bucketlistitem);
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
