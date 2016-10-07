import { Component , OnInit, ElementRef, Inject, Input} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {metricsService} from './metrics-service';
import {dateToStr} from '../../shared/utils/thbUtils';
import {metricTableComponent} from './metrictable.component';

@Component({
    selector:'metric-dash-component',
    template:`
    <div class="row" style="padding: 10px;">
        <div class="col-sm-12 col-md-12 thumbnail">
            <div class="panel">
                <p style="font-size:24px;padding:2px;">{{Mdata.title}}</p>
                <hr>  
            </div>
            <div class="">
               <div class="row" >
                    
                        <metric-table-component [tableData]="tableData" [mTitle]="Mdata.title" *ngFor="let tableData of Mdata.data" >
                        </metric-table-component>
                    
                     
                </div>
            </div>
        </div>
    </div>
    `
})

export class metricTableView{
     @Input() Mdata = {}; 
    // @Input() tableData = {};

      

    //  onClickShow:boolean = false;
    //  showButtom:boolean = true;
    //  hideButtom:boolean = false
    //  toggle(){
    //       this.onClickShow = true;
    //       this.showButtom = false;
    //       this.hideButtom = true;
    //  }
    //  togglehide(){
    //      this.onClickShow = false;
    //      this.showButtom = true;
         
    //  }
}