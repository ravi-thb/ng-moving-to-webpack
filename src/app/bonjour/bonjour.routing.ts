import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import {AuthGuard} from '../shared/auth/auth.guard';
import { BonjourComponent }       from './bonjour.component';
import {TeamHomeComponent} from './team/teamhome.component';
import {SalesTeamComponent} from './team/salesteam.component';
import {DevTeamComponent} from './team/devteam.component';

const routes: Routes = [
  { path: 'asdf',
    component: BonjourComponent,
    canActivate: [AuthGuard]
  },
  { path: 'team',
    component: TeamHomeComponent,
    children: [
      { path: 'dev', component: DevTeamComponent },
      { path: 'sales', component: SalesTeamComponent },
      { path: '', component: DevTeamComponent }
    ]
  },
  { path: '',
    component: BonjourComponent
  },
  { path: '**',
    component: BonjourComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);