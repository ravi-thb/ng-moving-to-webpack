import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {FeedComponent} from './feeds.component';
import {FeedListComponent} from './show/feed.list.component';
import {FeedBodyComponent} from './show/indfeed.component';
import { FormsModule } from '@angular/forms';

import { routing } from './feeds.routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule
  ],
  declarations: [
    FeedComponent,
    FeedListComponent,
    FeedBodyComponent
  ]
})
export class FeedModule { }