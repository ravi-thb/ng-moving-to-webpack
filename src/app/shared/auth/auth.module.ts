import { NgModule , ModuleWithProviders,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AuthenticationService} from './authentication.service';
import { CoreModule } from '../coreModule/core.module';
import {AuthGuard} from './auth.guard';


@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(), 
    FormsModule,

    ]
})

export class authModule {
  constructor(@Optional() @SkipSelf() parentModule: authModule) {
        if (parentModule) {
            throw new Error("loginModule should only be imported in the root NgModule of the application!");
        }
    }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: authModule,
      providers: [AuthenticationService, AuthGuard]
    }
  }
}