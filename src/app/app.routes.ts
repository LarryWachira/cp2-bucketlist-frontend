import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component'
import { BucketListsComponent } from './bucket-lists/bucket-lists.component';
import { BucketListDetailsComponent } from './bucket-list-details/bucket-list-details.component';


// Map routes to components
const routes: Routes = [
  // map '/welcome' to the welcome component
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  // map '/bucketLists' to the bucket list component
  {
    path: 'bucketlists',
    component: BucketListsComponent
  },
  // map '/bucketLists/:id' to bucket list details component
  {
    path: 'bucketlists/:id',
    component: BucketListDetailsComponent
  },
  // map '/' to '/welcome' as the default route
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
