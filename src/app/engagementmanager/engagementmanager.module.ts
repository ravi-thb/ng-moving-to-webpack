import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { EngagementManagerComponent } from './engagementmanager.component';

import { routing } from './engagementmanager.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    EngagementManagerComponent
  ]
})
export class EngagementManagerModule { }