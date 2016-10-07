import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './pageNotFound.component';

export const routes: Routes = [
  { path: 'em', loadChildren: 'engagementmanager/engagementmanager.module#EngagementManagerModule' },
  { path: 'hello', loadChildren: 'hello/hello.module#HelloModule'},
  { path: 'auth', loadChildren: 'login/login.module#loginModule'},
  { path: 'bonjour', loadChildren: 'bonjour/bonjour.module#BonjourModule' },
  { path: 'labpatient', loadChildren: 'labpatient/labpatient.module#LabPatientModule' },
  { path: 'hospitalbi', loadChildren: 'hospitalbi/hospitalbi.module#HospitalBIModule' },

  { path: '', component: AppComponent }, 
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);