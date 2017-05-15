import { Component } from '@angular/core';

import { BucketListsService } from "./bucket-lists/bucket-lists.service";
import { BucketListDetailsService } from "./bucket-list-details/bucket-list-details.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketListsService, BucketListDetailsService]
})


export class AppComponent {
}
