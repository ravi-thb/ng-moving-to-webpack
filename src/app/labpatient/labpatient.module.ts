import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from '@angular/common';
import {Component,OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {LabPatientComponent} from './labpatient.component';
import {routing} from "./labpatient.routing";

import {FeedContainer} from './feed/feedcontainer.component';
import {FeedBody} from './feed/feedbody.component';
import {FeedDescription} from './feed/feed-description';

import {Report} from './reports/report';
import {LabReportList} from './reports/labreport.component';
import {LabModal} from './reports/labreportmodal.component';
import {LabButton} from './reports/labreportbutton.component';

import {RadiologyModal} from './reports/radiology-modal';



import {Feed} from './feed/feed';

@NgModule({
  declarations: [LabPatientComponent,Feed,FeedContainer,FeedBody,FeedDescription,Report,LabReportList,LabModal,
  LabButton,RadiologyModal],
  imports     : [FormsModule, HttpModule, routing, CommonModule ],
   bootstrap   : [LabPatientComponent]
})
export class LabPatientModule {

}