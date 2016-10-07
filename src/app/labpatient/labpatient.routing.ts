import { ModuleWithProviders } from '@angular/core';
import {Routes} from '@angular/router';
import {RouterModule} from "@angular/router";
import {Feed} from './feed/feed';
import {FeedContainer} from './feed/feedcontainer.component';

import {Report} from './reports/report'

const routes: Routes = [
     
  {path: 'feeds', component: Feed},
  {path: 'report', component: Report},
  {path: '**', component: Feed}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);