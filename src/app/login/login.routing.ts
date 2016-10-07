import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login.component';
import {AuthGuard} from '../shared/auth/auth.guard';
 

export const routes: Routes = [
  { path: 'Login', component:LoginComponent},
  
  {path:'**' ,component:LoginComponent}

];
 
export const routing: ModuleWithProviders = RouterModule.forChild(routes);