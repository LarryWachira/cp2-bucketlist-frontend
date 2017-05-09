import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component'
import { BucketListComponent } from './bucket-list/bucket-list.component';


// Map routes to components
const routes: Routes = [
  // map '/bucketlists' to the bucket list component
  {
    path: 'bucketlists',
    component: BucketListComponent
  },
  // map '/welcome' to the welcome component
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  // map '/' to '/welcome' as the default route
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
