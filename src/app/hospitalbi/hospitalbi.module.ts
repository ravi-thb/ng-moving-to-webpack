import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http }    from '@angular/http';
import { ReactiveFormsModule, FormsModule,FormBuilder, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {ConversionComponent }from './conversions/conversion.component';
import {CustomQueriesComponent }from './custom-queries/custom-queries.component';
import {MetricsDashboardComponent }from './metrics-dashboard/metrics-dashboard.component';
import {ThbFooterComponent} from '../shared/footer/thb-footer.component';
import { HospitalBIComponent }  from './hospitalbi.component';
import { routing }  from './hospitalbi.routing';
import {AuthGuard} from '../shared/auth/auth.guard';
import {RemoteApiService} from '../shared/coreModule/remote-api.service';
import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
import { DynamicFormsUIModule} from '../shared/formModule/dynamic-form.module';
import {metricTableView} from '../hospitalbi/metrics-dashboard/metricData.component';
import {AuthenticationService} from '../shared/auth/authentication.service';
import {metricTableComponent} from '../hospitalbi/metrics-dashboard/metrictable.component';
 
@NgModule({
  imports: [
    routing,
    HttpModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    DynamicFormsUIModule,
    DynamicFormsCoreModule.forRoot()
  ],
  declarations: [
    ThbFooterComponent, 
    HospitalBIComponent, 
    CustomQueriesComponent, 
    ConversionComponent, 
    metricTableView,
    metricTableComponent,
    MetricsDashboardComponent
  ],
  
  //bootstrap: [ HospitalBIComponent ],
  providers: [AuthGuard, AuthenticationService,RemoteApiService]
})
export class HospitalBIModule { }
