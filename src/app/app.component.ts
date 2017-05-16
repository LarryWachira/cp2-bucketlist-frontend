import { Component } from '@angular/core';

import { BucketListsService } from "./bucket-lists/bucket-lists.service";
import { BucketListDetailsService } from "./bucket-list-details/bucket-list-details.service";
import { AuthorizationService } from "./authorization/authorization.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketListsService, BucketListDetailsService, AuthorizationService]
})


export class AppComponent {
}
