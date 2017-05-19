import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";


/*
 * Turn Date into relative date (e.g. 5 days ago)
 * Usage:
 *   value | relativeDate
 * Example:
 *   {{ 86400 |  relativeDate}}
 *   formats to: '1 day ago'
 */


// Epochs
const epochs: any = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
];

@Pipe({name: 'relativeDate'})
export class RelativeDatePipe implements PipeTransform {

  getDuration(timeAgoInSeconds: number) {
    for (let [name, seconds] of epochs) {
      let interval = Math.floor(timeAgoInSeconds / seconds);

      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
    return {
      interval: 0,
      epoch: 'second'
    };
  };

  transform(dateStamp: number): string {

    let timeAgoInSeconds = Math.floor((new Date().getTime() - new Date(dateStamp).getTime()) / 1000);
    let {interval, epoch} = this.getDuration(timeAgoInSeconds);
    let suffix = interval === 1 ? '' : 's';

    return `${interval} ${epoch}${suffix} ago`;

  }

}


/*
 * Convert Date from server into UTC format
 */

@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe implements PipeTransform {
  transform(value: any, args: any[]): any {

    if (args && args[0] === 'local') {
      let currentTime = new Date(value);
      currentTime.setHours(currentTime.getHours()-3);
      return currentTime.toLocaleString();
    }
    else if (value) {
      let currentTime = new Date(value);
      currentTime.setHours(currentTime.getHours()-3);
      return currentTime;
    }
    return value;
  }
}


/*
 * Set and bind logged in status app-wide
 * Communicate search term from app component to search component
 */

@Injectable()
export class AppGlobals {
  public isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  public currentUser: Subject<object> = new Subject<object>();
  public searchTerm: Subject<string> = new Subject<string>();

  setLoginStatus(isLoggedIn: boolean) {
    this.isUserLoggedIn.next(isLoggedIn);
  }

  getLoginStatus(): Observable<any> {
    return this.isUserLoggedIn.asObservable();
  }

  setCurrentUser(user: object) {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable();
  }

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }

}
