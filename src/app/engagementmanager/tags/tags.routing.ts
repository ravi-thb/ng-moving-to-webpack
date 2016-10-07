import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { TagsDetailComponent }  from './tags.detail/tags.detail.layout.component';

const routes: Routes = [
  { 
    path: 'tag-u',  component: TagsDetailComponent
  },
  { 
    path: '**',  component: TagsDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);