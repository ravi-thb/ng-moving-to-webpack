import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {TagsDetailComponent} from './tags.detail/tags.detail.layout.component';
import {FlagListComponent} from './tags.detail/flags.list.component';

import { routing } from './tags.routing';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [
    TagsDetailComponent,
    FlagListComponent
  ]
})
export class TagModule { }