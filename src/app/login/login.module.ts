import { NgModule , ModuleWithProviders,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import {AuthenticationService} from '../shared/auth/authentication.service';
import { authModule } from '../shared/auth/auth.module';
import {AuthGuard} from '../shared/auth/auth.guard';
import {routing} from './login.routing';
import {LoginComponent} from './login.component';
// import {HospitalBIComponent} from '../../hospitalbi/hospitalbi.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    // authModule.forRoot(), 
    FormsModule
    ],
  declarations: [
    LoginComponent
  ]
  //,exports: [LoginComponent]
})

 export class loginModule {
 }
//   constructor(@Optional() @SkipSelf() parentModule: loginModule) {
//         if (parentModule) {
//             throw new Error("loginModule should only be imported in the root NgModule of the application!");
//         }
//     }
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: loginModule,
//     }
//   }
// }