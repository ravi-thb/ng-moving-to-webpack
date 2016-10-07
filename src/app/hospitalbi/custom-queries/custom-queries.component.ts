import { Component , OnInit,Input,Output, ElementRef, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import { ChartsModule  } from 'ng2-charts/ng2-charts';
import {dateToStr} from '../../shared/utils/thbUtils';

import {CustomQueriesService} from './customQueries.service';


import {FormGroup, FormControl, FormArray} from "@angular/forms";
import { Observable } from 'rxjs/Rx';

import {DynamicFormService, DynamicCheckboxModel, DynamicFormControlModel, DynamicFormArrayModel} from
 "@ng2-dynamic-forms/core";
import {JsonFormComponent} from '../../shared/formModule/jsonForm/json-form.component';
import {IFormUI} from '../../shared/formModule/model/IFormUI';
import {LocalStoreService} from '../../shared/coreModule/local-store-service';


@Component({
    selector: 'hospitalbi-custom-queries',
    template: `
        
<div class="row">
	<div class="col-md-10 col-sm-12 col-lg-10 col-md-offset-1 col-md-offset-1 "  style="padding-top: 10px;">
		<div class="panel panel-default"> 
			 <div class="panel-heading">Conversion</div>
				<div class="row" style="padding: 10px;">
					
						 <dynamic-json-form [formUIObservable]='formUI$'  (Checked) = "formnewData($event)">
        				 </dynamic-json-form>
						  
				 </div>
				 
			 
			 </div>	
		</div>
	</div>
 	
<div class="row" style="padding-top: 10px;">
	<div class="col-md-10 col-sm-12 col-lg-10 col-md-offset-1 col-md-offset-1 "  >
		<div class="panel panel-default" style="margin: 10px;"> 
			 <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 " *ngIf="pieData">
                <base-chart class="chart"
					[data]="this.pieData"
					[labels]="this.pieLabels"
					[chartType]="pieChartType">
				</base-chart>

                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 "  *ngIf="pieData">
                 <table class="table table-bordered">
					<thead>
					 
					</thead>
					<tbody>
					
					 <tr *ngFor="let d of this.customGraphData.result">
					 	<td>{{d.title}}</td>
					 	<td>{{d.value}}</td>
					 </tr>
					 
					</tbody>
				</table>
				 

                </div>
             </div>
		</div>
	</div>
</div> 
    
    `,
    providers:[CustomQueriesService]
})
export class CustomQueriesComponent implements OnInit{ 

	pieLabels:any[];
	pieData:number[];
	customGraphData:any;
	private formUI$:Observable<IFormUI>;
	public pieChartType:string = 'pie';

	submitData(){ 
		console.log("test");
	}
	

	constructor(private http : Http,private customqueriesService :CustomQueriesService,private _localService:LocalStoreService){
		
	}
	
	formnewData(data:any){  
		console.log("again jorwal data : " + JSON.stringify(data));
		this.makePieChart(data);
	}
	
		makePieChart(pieChartData:any){
			this.customGraphData = pieChartData;
		let pieLabels:any[] = [];
		let pieData:number[] = [];
		let dataItems = pieChartData.result;

		console.log(`pie label ${JSON.stringify(dataItems)}`);

		for(let indItem of dataItems){
			pieLabels.push(indItem.title);
			pieData.push(indItem.value);
		}

		this.pieLabels = pieLabels;
		console.log(`pie label ${this.pieLabels}`);
		
		this.pieData = pieData;
		console.log(`pie label ${this.pieData}`);


	}

	 
	 
    ngOnInit(){
		 let temp = require('./formjson').formUI;
        console.log("setting formjson data here");
        this.formUI$ = this._localService.set("examplejsonform", temp);

    }

	
  
}


