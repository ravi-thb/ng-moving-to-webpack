import { NgModule }      from '@angular/core';

import { BonjourComponent }  from './bonjour.component';
import {TeamHomeComponent} from './team/teamhome.component';
import {SalesTeamComponent} from './team/salesteam.component';
import {DevTeamComponent} from './team/devteam.component';
import { routing } from './bonjour.routing';
import {authModule} from '../shared/auth/auth.module';
import {AuthGuard} from '../shared/auth/auth.guard';
import {AuthenticationService} from '../shared/auth/authentication.service';

@NgModule({
  imports: [
    routing,
    authModule
  ],
  declarations: [ 
    BonjourComponent,
    TeamHomeComponent,
    DevTeamComponent,
    SalesTeamComponent
  ],
  providers: [AuthGuard, AuthenticationService]
})
export class BonjourModule { }
