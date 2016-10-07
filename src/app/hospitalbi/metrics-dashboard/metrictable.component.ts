import { Component , OnInit, ElementRef, Inject, Input} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {metricsService} from './metrics-service';
import {dateToStr} from '../../shared/utils/thbUtils';
import {RemoteApiService} from '../../shared/coreModule/remote-api.service';

@Component({
    selector:'metric-table-component',
    template:`
        <div class="col-sm-12 col-md-7 col-lg-7">
            <div class="panel panel-default"> 
                <div class="row panel-heading"   style="width:100%;">
                    <div class="col-sm-7 col-md-7 col-lg-7" *ngIf="!showArrow" (click)="gettableData(tableData.name)">
                        <label>{{tableData.name}}</label>
                    </div>
                    <div class="col-sm-7 col-md-7 col-lg-7" *ngIf="showArrow" (click)="hideDownArrow()">
                        <label>{{tableData.name}}</label>
                    </div>
                    <div class="col-sm-5 col-md-5 col-lg-5" *ngIf="!showArrow" (click)="gettableData(tableData.name)">
                        <p style="float:right"><i class="fa fa-arrow-right"></i> </p>
                    </div>
                    <div class="col-sm-5 col-md-5 col-lg-5" *ngIf="showArrow" (click)="hideDownArrow()">
                        <p style="float:right"><i class="fa fa-arrow-down"></i> </p>
                    </div>
                </div>
                    <div *ngIf="this.Data">
                        <table class="table" *ngIf="!hideTable">   
                        <thead>
                        <tr>
                            <th data-field="type">Type</th>
                            <th data-field="count">count</th>
                            <th data-field="view">View Chart</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr *ngFor="let tablevalues of this.Data.items">
                            <td>{{tablevalues.title}}</td>
                            <td>{{tablevalues.count}}</td>
                            <td (click)="viewMetricChart(tablevalues.title)">View</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
            
      </div>    
       <div class="col-sm-12 col-md-5 col-lg-5">
                        <p>table area</p>
       </div>  
    `
})

export class metricTableComponent{
      @Input() tableData = {};
      @Input() mTitle = {};

      Data:any;
      first:any;
      tlast:any;
      last:any;
      lastday:any;
      curr:any;
      myData:any;
      lineLabels:any[];
      lineData:any[];
      lineChartDataArray:any;
      trendsData:any;

      showArrow:boolean = false;
      hideTable:boolean = false;
      

      lineChartMetricData:any;
     
     


       constructor(private  _remoteService: RemoteApiService){
             
        }

        viewMetricChart(title:any){
            console.log("clicked view buttom!!!" + title);

            this.trendsData = {
                    "majortype":this.mTitle,
                    "minor":this.myData.minor,
                    "type":title, 
                    "time":"",
                    "starttime": "",
                    "endtime": ""
            }
            console.log(JSON.stringify(this.trendsData));
        }

        hideDownArrow(){
           if(this.Data != null){
                this.showArrow = false;
                this.hideTable = true;
           } 
            
        }

     gettableData(name:any){
         this.showArrow = true;
          this.hideTable = false;
            console.log(name);
            console.log(this.mTitle);
            this.curr = new Date();
            this.first = dateToStr(this.curr);

            this.last = this.curr.getDate() - 30  ;
            this.lastday = new Date( this.curr.setDate( this.last)).toUTCString();
            this.tlast =  dateToStr(this.lastday);

            console.log(this.first);
            console.log(this.tlast);
 

            this.myData = {
                "starttime":this.tlast,
                "endtime":this.first,
                "majortype":this.mTitle,
                "minor":name
            }

            console.log(this.myData);

            let api_url = "/bi/hospital/dummy/metrics/items";

            this._remoteService.postData(api_url, this.myData)
            .subscribe(res => { 
                this.Data = res;
                console.log(res);
                // this.makeLineChart(this.Data);
            });
     }
    //   makeLineChart(lineChartData:any){
    //         console.log(`my line data : ${lineChartData}`);
    //         this.lineChartMetricData = lineChartData;
    //         let lineLabels:any[] = [];
	// 	    let lineData:number[] = [];

    //         for(let indItem of this.lineChartMetricData.items){
    //             lineLabels.push(indItem.title);
    //             lineData.push(indItem.count);
    //          }
    //          console.log(lineLabels);
    //           console.log(lineData);
    //           console.log(this.myData.minor);

    //          let lineChartDataArray:any  = {
    //              data: lineData,
    //              label:this.myData.minor
    //          }


             
    //          this.lineChartDataArray = [lineChartDataArray];
    //          this.lineLabels = lineLabels;

    //          console.log(this.lineChartDataArray);
    //          console.log(this.lineLabels);

    //     }
//         public lineChartColors:Array<any> = [
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     },
//     { // dark grey
//       backgroundColor: 'rgba(77,83,96,0.2)',
//       borderColor: 'rgba(77,83,96,1)',
//       pointBackgroundColor: 'rgba(77,83,96,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(77,83,96,1)'
//     },
//     { // grey
//       backgroundColor: 'rgba(148,159,177,0.2)',
//       borderColor: 'rgba(148,159,177,1)',
//       pointBackgroundColor: 'rgba(148,159,177,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
//     }
//   ];
}