import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { EngagementManagerComponent }       from './engagementmanager.component';

const routes: Routes = [
  { 
    path: 'feed',  
    component: EngagementManagerComponent,
    loadChildren: 'engagementmanager/feeds/feeds.module#FeedModule'
  },
  { 
    path: 'tag',  
    component: EngagementManagerComponent,
    loadChildren: 'engagementmanager/tags/tags.module#TagModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);