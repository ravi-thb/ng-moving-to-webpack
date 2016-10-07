import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule, Http }    from '@angular/http';
import {RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './pageNotFound.component';
import { routing }  from './app.routing';
import {authModule} from './shared/auth/auth.module';
import {CommonModule} from '@angular/common';
 
import {AuthGuard} from './shared/auth/auth.guard';
import {AuthenticationService} from './shared/auth/authentication.service';
//import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    BrowserModule,
//    FormsModule,
CommonModule,  
    routing,
    HttpModule,
    authModule
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[Title, AuthGuard, AuthenticationService]
})
export class AppModule { }
