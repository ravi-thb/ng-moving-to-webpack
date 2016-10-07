import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { FeedComponent }  from './feeds.component';
import {FeedListComponent} from './show/feed.list.component';

const routes: Routes = [
  { 
    path: 'feed',  component: FeedComponent
  },
  { 
    path: 'feedlist',  component: FeedListComponent
  },
  { 
    path: '',  component: FeedListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);