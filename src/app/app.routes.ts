import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component'
import { BucketListsComponent } from './bucket-lists/bucket-lists.component';
import { BucketListDetailsComponent } from './bucket-list-details/bucket-list-details.component';
import { LoginComponent } from "./authorization/login.component";
import { RegisterComponent } from "./authorization/register.component";
import { AuthorizationGuard } from "./authorization/authorization.guard";
import { SearchComponent } from "./search/search.component";
import {DashboardComponent} from "app/dashboard/dashboard.component";


// Map routes to components
const routes: Routes = [
  // map '/welcome' to the welcome component
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  // map '/login' to the login component
  {
    path: 'login',
    component: LoginComponent
  },
  // map '/register' to the register component
  {
    path: 'register',
    component: RegisterComponent
  },
  // map '/dashboard' to the dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthorizationGuard]
  },
  // map '/bucketLists' to the bucket list component
  {
    path: 'bucketlists',
    component: BucketListsComponent,
    canActivate: [AuthorizationGuard]
  },
  // map '/bucketLists/search' to the search component
  {
    path: 'bucketlists/search',
    component: SearchComponent,
    canActivate: [AuthorizationGuard]
  },
  // map '/bucketLists/:id' to bucket list details component
  {
    path: 'bucketlists/:id',
    component: BucketListDetailsComponent,
    canActivate: [AuthorizationGuard]
  },
  // map '*' to '/welcome' as the default route
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
