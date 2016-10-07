import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {ConversionComponent }from './conversions/conversion.component';
import {CustomQueriesComponent }from './custom-queries/custom-queries.component';
import {MetricsDashboardComponent }from './metrics-dashboard/metrics-dashboard.component';
import {HospitalBIComponent} from './hospitalbi.component';

import {AuthGuard} from '../shared/auth/auth.guard';

// import { loginRoutes,
//          authProviders }      from './login.routing';
// 
// import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard }          from './auth-guard.service';


const appRoutes: Routes = [

   { path: '',
    component: HospitalBIComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'Metricsdashboard', component: MetricsDashboardComponent, canActivate: [AuthGuard] },
      { path: 'Conversion', component: ConversionComponent, canActivate: [AuthGuard] },
      { path: 'CustomQueries', component: CustomQueriesComponent, canActivate: [AuthGuard] }
    ]
   },
  {
    path: '**',
    component: HospitalBIComponent,
    canActivate:[AuthGuard]
    
  },
  { path: '',
    component: HospitalBIComponent,
     canActivate:[AuthGuard]
  }
  // {
  //    path: 'Metricsdashboard',
  //    component: HospitalBIComponent,
  //    canActivate: [AuthGuard]
  // },
  // {
  //   path: 'Conversion',
  //   component: ConversionComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'CustomQueries',
  //   component: CustomQueriesComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: '**',
  //   component: MetricsDashboardComponent,
  //   canActivate: [AuthGuard]
  // }
];

// export const appRoutingProviders: any[] = [
//   authProviders,
//   CanDeactivateGuard
// ];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/