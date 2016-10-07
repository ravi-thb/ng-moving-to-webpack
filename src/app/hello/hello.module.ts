import { NgModule }      from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes,
         RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule,FormBuilder, Validators } from '@angular/forms';

import { HelloComponent }  from './hello.component';
import {HelloFormComponent } from './helloForm.component';
import {QwerComponent } from './qwer.component';
import { routing } from './hello.routing';
import {authModule} from '../shared/auth/auth.module';
import {AuthGuard} from '../shared/auth/auth.guard';
import {AuthenticationService} from '../shared/auth/authentication.service';
import {RemoteApiService} from '../shared/coreModule/remote-api.service';
import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
import { DynamicFormsUIModule} from '../shared/formModule/dynamic-form.module';
import {BasicExampleComponent} from './basic/basic-example.component';
import {JsonFormExampleComponent} from './jsonForm/json-form-example-component';
import {NewJsonFormExampleComponent} from './newjsonForm/newjson-form.component';

@NgModule({ 
  imports: [
    routing,
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsUIModule
  ],
  declarations: [ HelloComponent, QwerComponent, JsonFormExampleComponent, HelloFormComponent,
   BasicExampleComponent,NewJsonFormExampleComponent ],
  providers: [AuthGuard, AuthenticationService, RemoteApiService]
})
export class HelloModule { }
