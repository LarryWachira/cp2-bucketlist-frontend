import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppGlobals } from "../app.utils";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm: string;
  searchTermSubscription: Subscription;

  constructor(private appGlobals: AppGlobals) { }

  ngOnInit() {
    this.searchTermSubscription = this.appGlobals.getSearchTerm().subscribe(term => this.searchTerm = term);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.searchTermSubscription.unsubscribe()
  }

}
