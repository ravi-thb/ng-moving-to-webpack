import { Component , OnInit, ElementRef, Inject, Input} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {metricsService} from './metrics-service';
import {dateToStr} from '../../shared/utils/thbUtils';
import {metricTableView} from './metricData.component';
// declare var jQuery:any;
@Component({
    selector: 'hospitalbi-dashboard',
    template: `
  <div class="row">
    <div class="col-md-10 col-sm-12 col-lg-10 col-md-offset-1 col-md-offset-1 ">
        <metric-dash-component [Mdata] = "Mdata" *ngFor="let Mdata of this.metricGraphData;let i = index;">
        </metric-dash-component>
    </div>
 </div> 
    `  ,
    providers:[metricsService]
})
export class MetricsDashboardComponent { 

   metricdata:any[];
   metricGraphData:any;

   

      curr:any;
      tfirst:any;
      first:any;
      last:any;
      firstday:any;
      lastday:any;
      tlast:any;
      mydata:any;
     
    
constructor(public metricsService : metricsService,private http:Http){

        this.curr = new Date();
        this.first = dateToStr(this.curr);

        this.last = this.curr.getDate() - 30  ;
        this.lastday = new Date( this.curr.setDate( this.last)).toUTCString();
        this.tlast =  dateToStr(this.lastday);

        console.log(this.first);
        console.log(this.tlast);

        this.mydata =  {
            "start":this.tlast,
            "end":this.first
           }

  this.metricsService.post(this.mydata)
            .subscribe(res => { 
                this.metricGraphData = res.metrics;
                console.log(this.metricGraphData);
                // this.makePieChart(this.customGraphData);
        });
    }
    
 

 

//demo data test
  public lineChart:Array<any> = [
    {
                label: 'Dataset 1',
                backgroundColor: "rgba(220,220,220,0.5)",
                data: [151,187,1,0.5]
            }, {
                label: 'Dataset 2',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [1,187,1,0.5]
            }, {
                label: 'Dataset 3',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [105,187,205,0.5]
            }
  ]

private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 146, 0)",
      hoverBackgroundColor: "rgb(255, 146, 0)"
    }
  ];

    private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public lineChartColours:Array<any> = [
        { // grey
            backgroundColor: '#B3C1D9',
            borderColor: '#264E94',
            pointBackgroundColor: '#003082',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];

// getMetricData(){
//       this.chartService.getChartData().subscribe(data => {
//         console.log("Metrics dashboard data : " + data);
//         this.metricdata = data.Others as any[];
// })
        
//     }
    	 

 
}

 