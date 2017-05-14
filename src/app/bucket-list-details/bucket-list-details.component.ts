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
  items: BucketListItem[] = [];
  bucketListUrl: string;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _bucketListDetailsService: BucketListDetailsService, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.bucketListUrl = this.apiUrl + `/bucketlists/${this.id}`;

    this._bucketListDetailsService
      .getBucketList(this.bucketListUrl)
      .subscribe(
        data => {
          this.bucketlist = data.name;
          this.items = data.items;
        },
        error => this.errorMessage = error,
        () => this.isLoading = false );
  }

}
