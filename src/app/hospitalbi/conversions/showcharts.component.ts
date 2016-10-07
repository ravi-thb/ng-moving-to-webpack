import { Component , OnInit, ElementRef, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';

@Component({
    selector:'show-chart',
    template:`
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="card">
                    <base-chart
                    class="chart"
                    [datasets]="lineChart"
                    [labels]="labels"
                    [options]="options"
                    [chartType]="'bar'">
                    </base-chart>
                </div>
            </div>
        </div>
    `
})

export class ShowChartComponent{


    private options = {
     scales: {
                        xAxes: [{
                            stacked: true,
                        }] 
                    }
  };
     public lineChart:Array<any> = [
    {
                label: 'Dataset 1',
                backgroundColor: "rgba(220,220,220,0.5)",
                data: [151,187,111,95,30,88]
            }, {
                label: 'Dataset 2',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [100,187,11,41,21,47]
            }, {
                label: 'Dataset 3',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [105,187,205,61,88,90]
            }
            , {
                label: 'Dataset 4',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [155,197,105,61,88,90]
            }
            , {
                label: 'Dataset 5',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [125,17,25,61,8,90]
            }
            , {
                label: 'Dataset 6',
                backgroundColor: "rgba(151,187,205,0.5)",
                data: [195,117,20,61,188,90]
            }
  ]

   private labels = ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4', 'Dataset 5', 'Dataset 6'];
}