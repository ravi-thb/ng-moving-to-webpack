import { Component , OnInit, ElementRef, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {dateToStr} from '../../shared/utils/thbUtils';
import {HospitalbiConversionService} from './conversion.service';


@Component({
    selector: 'hospitalbi-conversion',
    styles:[`
            .btn, .btn-large {
            text-decoration: none;
            color: #fff;
            background-color: #2f4050;
            text-align: center;
            letter-spacing: .5px;
            transition: .2s ease-out;
            cursor: pointer;
        }
    `],    
    template: `
    
     <div class="row" >
	<div class="col-md-10 col-sm-12 col-lg-10 col-md-offset-1 col-md-offset-1 "  style="padding-top: 10px;">
		 
		<div class="panel panel-default"> 
            <ul class="nav nav-tabs panel-heading">
                <li class="active"><a data-toggle="tab" href="#showchart">Show Charts</a></li>
                <li><a data-toggle="tab" href="#showtable">Show Table</a></li>
            </ul>
		
			<div class="tab-content">
                <div id="showchart" class="tab-pane fade in active">
                    <div class="row" >
                        <div *ngIf="lineChartOuter" class="col-sm-12 col-md-6 col-lg-6" style="padding:20px">
                            <div class="panel-heading">{{graphOneData.title}}</div>
                            <base-chart
                            class="chart"
                            [datasets]="lineChartOuter"
                            [labels]="labelsArray"
                            [options]="options"
                            [chartType]="'bar'">
                            </base-chart>
                        </div>
                         
                         <div *ngIf="lineChart" class="col-sm-12 col-md-6 col-lg-6" style="padding:20px">
                         <div class="panel-heading">{{graphTwoData.title}}</div>
                            <base-chart
                            class="chart"
                            [datasets]="lineChart"
                            [labels]="labelsArraySecond"
                            [options]="options"
                            [chartType]="'bar'">
                            </base-chart>
                        </div>
                            
                    </div>  
                </div>
                <div id="showtable" class="tab-pane fade">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12" style="padding:20px">
                        <div class="panel panel-default"> 
                            <table class="table table-bordered" *ngIf="lineChartOuter">
                            <thead>
                            <tr>
                                <th>S.No.</th>
                               <th *ngFor="let tlabel of labelsArray;let j=index " data-field="tlabel">{{tlabel}}</th>
                             </tr>
                            </thead>
                           <tbody>
                              <tr *ngFor="let d of lineChartOuter; let i = index">
                                <td>{{d.label}}</td> 
                                <td>{{d.data[0]}}</td>
                                <td>{{d.data[1]}}</td>
                                <td>{{d.data[2]}}</td>
                             
                                 
                              </tr>
                                
                             
                            </tbody>
                        </table>
                        </div>
                        </div>
                         <div class="col-sm-12 col-md-12 col-lg-12" style="padding:20px">
                        <div class="panel panel-default"> 
                            <table class="table table-bordered" *ngIf="lineChart">
                            <thead>
                            <tr>
                                <th>S.No.</th>
                               <th *ngFor="let tlabel of labelsArraySecond;let j=index " data-field="tlabel">{{tlabel}}</th>
                             </tr>
                            </thead>
                           <tbody>
                              <tr *ngFor="let d of lineChart; let i = index">
                                <td>{{d.label}}</td> 
                                <td>{{d.data[0]}}</td>
                                <td>{{d.data[1]}}</td>
                                <td>{{d.data[2]}}</td>
                             
                                 
                              </tr>
                                
                             
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                 </div>
                 
            </div>
            </div> 
                </div>	 
            </div>

          

    `,
    providers:[HospitalbiConversionService]
})
export class ConversionComponent implements OnInit{ 

    curr:any;
    tfirst:any;
    first:any;
    last:any;
    firstday:any;
    lastday:any;
    tlast:any;

    graphdata:any;
    rawGraphData: any;
    mydata:any;

    graphTitle: any;
    items: any;
    itemsNameArray: any;
    labelsArray: any;
    lineChartOuter: any;
    labelsArraySecond: any;
    lineChart: any;
    graphOneData:any;
    graphTwoData:any;
        
constructor(private http : Http,private PostDateService:HospitalbiConversionService){

         this.curr = new Date();
        this.first = dateToStr(this.curr); 

        this.last = this.curr.getDate() - 30  ;
        this.lastday = new Date( this.curr.setDate( this.last)).toUTCString();
        this.tlast =  dateToStr(this.lastday);

        console.log(this.first);
        console.log(this.tlast);

        this.mydata =  {
            "start":"24-06-2016",
            "end":"25-09-2016" 
        }

        this.PostDateService.post(this.mydata)
            .subscribe(res => {
                this.rawGraphData = res;
                console.log(this.rawGraphData);
                this.transformDataForGraph(this.rawGraphData)
        });
}
    
ngOnInit(){
    console.log("loading metric dashboard");
}

transformDataForGraph(inputRawGraphData: any){
    console.log(`received request to draw ${inputRawGraphData}`)
    this.graphOneData = inputRawGraphData.result.views[0];
    this.graphTwoData = inputRawGraphData.result.views[1];
     
    this.makeGraph(this.graphOneData);
    this.makeSecondGraph(this.graphTwoData);
}

makeSecondGraph(graphData:any){
    let dataSet: string[] = [];
    let lineChart: any[] = [];

    let items = graphData.items;
    let labelsArray:string[] = [];

    for(let indItem of items){
        dataSet.push(indItem.title);

        if(indItem.metrices.length > 0){
            for(let indMatricsData of indItem.metrices){
                let labelName = indMatricsData.title;
                if(labelsArray.indexOf(labelName)== -1){
                    labelsArray.push(labelName);
                }
        }
        }else{
        labelsArray=[];
    }
 
    }
    if(labelsArray.length >0){
    for(let indlabel of labelsArray){
        
        let lineChartObject : any = {
            label: indlabel,
            backgroundColor: "rgba(151,187,205,0.5)",//todo: make it config based
            data: []
        };
        //initializing data array with null
        for(let elementIndex in dataSet){
            lineChartObject.data[elementIndex] = null;
        }

        console.log("items in conversion componentes");
        console.log(lineChartObject.data);


        //now filling data array
        for(let indItem of items){
            let itemIndexInData = dataSet.indexOf(indItem.title);
            if(indItem.metrices.length >0){
            for(let indMatrix in indItem.metrices){
                // console.log(indMatrix, indItem.metrices[indMatrix].title, indlabel, indMatrix.title == indlabel)
                if(indItem.metrices[indMatrix].title == indlabel){
                  if(indItem.metrices[indMatrix].value) {
                    lineChartObject.data[itemIndexInData] = indItem.metrices[indMatrix].value;
                        
                  }     
                }
            }
         }
     }
        console.log(`line chart object ${JSON.stringify(lineChartObject)}`)

        //pushing lineChartObject onto
        lineChart.push(lineChartObject);
    }

    
    this.labelsArraySecond = dataSet;
    console.log(`labelsArray is: ${JSON.stringify(this.labelsArraySecond)}`);

    this.lineChart = lineChart;
    console.log(`lineChart is: ${JSON.stringify(this.lineChart)}`);

}

}
 

makeGraph(graphData: any){
    //details needed to draw graph
    let dataSet: string[] = [];
    let lineChart:any[] = [];

    //details needed for calculation
    let items = graphData.items;
    let labelsArray: string[] = [];

    //calculating dataSet
    for(let indItem of items){
        dataSet.push(indItem.title);

        //calculating labelsArray
        for(let indMatricsData of indItem.metrices){
            let labelName = indMatricsData.title;
            if(labelsArray.indexOf(labelName) == -1){
                labelsArray.push(labelName);
            }
        }
    }
    console.log("calculating lineChart");
    console.log(labelsArray);
    //calculating lineChart
    for(let indlabel of labelsArray){
        
        let lineChartObject : any = {
            label: indlabel,
            backgroundColor: "rgba(151,187,205,0.5)",//todo: make it config based
            data: []
        };
        //initializing data array with null
        for(let elementIndex in dataSet){
            lineChartObject.data[elementIndex] = null;
        }

        console.log("items in conversion componentes");
        console.log(lineChartObject.data);


        //now filling data array
        for(let indItem of items){
            let itemIndexInData = dataSet.indexOf(indItem.title);
            for(let indMatrix in indItem.metrices){
                // console.log(indMatrix, indItem.metrices[indMatrix].title, indlabel, indMatrix.title == indlabel)
                if(indItem.metrices[indMatrix].title == indlabel){
                  if(indItem.metrices[indMatrix].value) {
                    lineChartObject.data[itemIndexInData] = indItem.metrices[indMatrix].value;
                        
                  }     
                }
            }
        }
        console.log(`line chart object ${JSON.stringify(lineChartObject)}`)

        //pushing lineChartObject onto
        lineChart.push(lineChartObject);
    
    this.labelsArray = dataSet;
    console.log(`labelsArray is: ${JSON.stringify(this.labelsArray)}`);

    this.lineChartOuter = lineChart;
    console.log(`lineChart is: ${JSON.stringify(this.lineChartOuter)}`);
    }

    //setting global values
   
}




//bar graph properties
private options = {
      scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
             },
        legend: {
            display: true,
            position:'bottom'}
        
  };

 
}

 

 