import { Component, OnInit } from '@angular/core';
import { BucketListsService } from "./bucket-lists.service";
import {BucketList} from "../bucket-list-details/bucket-list-details";
// import { BucketLists } from "./bucket-lists";
// import {BucketListItem} from "../bucket-list-details/bucket-list-item";
// import {BucketListDetailsService} from "../bucket-list-details/bucket-list-details.service";


@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-lists.component.html',
  styleUrls: ['./bucket-lists.component.css']
})

export class BucketListsComponent implements OnInit {
  bucketLists : BucketList[];
  selectedBucketList: BucketList;
  itemsNumber: number;
  pages: number;
  errorMessage: string;
  isLoading: boolean = true;

  constructor(private _bucketListService: BucketListsService) {
  }

  ngOnInit() {
    this._bucketListService
      .getAllBucketLists()
      .subscribe(
        data => {
          this.bucketLists = data.bucketlists;
          this.pages = data.pages;
          },
        error => this.errorMessage = error,
        () => this.isLoading = false );
  }

  selectBucketList(bucketlist) {
    this.selectedBucketList = bucketlist;
  }

}
