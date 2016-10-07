import {Component , OnInit, ElementRef, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {ReportService} from './report.service';
import {LabReportList} from './labreport.component';
import {LabModal} from './labreportmodal.component';
import {RadiologyModal} from './radiology-modal';

declare var jQuery:any;
@Component({
    selector:'report',
    styles:[`
        
    `],
    template:`
        <div class="row">
            <div class="col m9 l9 s12 offset-l3 offset-m3 card">
                <ul class="tabs">
                    <li class="tab col s3"><a href="#test1">Lab Report</a></li>
                    <li class="tab col s3"><a href="#test2">Test 2</a></li>
                    <li class="tab col s3"><a href="#test4">Test 4</a></li>
                </ul>
                 
            </div>
        </div>    
            <div class="row" style="width:100%;float:left;">
                <div id="test1" class="col s12 m12 l12">
                     <div class="col s12 m3 l3 card">
                        <lab-modal></lab-modal>
                    </div>
                    <div class="col s12 m8 l8 " >
                     
                        <labreport-list [report] = "report" *ngFor="let report of this.reports"></labreport-list>
                      
                    </div>
               </div>
                <div id="test1" class="col s12 m12 l12">
                     <div class="col s12 m3 l3 card">
                      <radiology-modal></radiology-modal>
                    </div>
                    <div class="col s12 m8 l8 " >
                     <h3>Test</h3>                      
                    </div>
               </div>
                <div id="test4" class="col s12">Test 3</div>
            </div>
         
    `,
     providers:[ReportService]

})

export class Report implements OnInit{

        elementRef: ElementRef;
         reports:any[];
        //  filesToUpload: Array<File>;
     
    constructor(@Inject(ElementRef) elementRef: ElementRef,private reportService : ReportService) {
        this.elementRef = elementRef;
        //  this.filesToUpload = [];

          
    }
    ngOnInit() { 
        console.log("element is now ready for dropdown");
        jQuery(this.elementRef.nativeElement).find('ul.tabs').tabs();
         this.getReports();
    }

    // fileChangeEvent(fileInput: any){

    //     this.filesToUpload = <Array<File>> fileInput.target.files;
    //     console.log(this.filesToUpload);
    // }
   
     

    getReports(){
         
       this.reportService.getReport().subscribe(data => {
            console.log("reports data: "+data);
            if (data.reports){
                this.reports = JSON.parse(data.reports) as any[]
            }
             
        });

    }

    // upload() {
    //     let headers = new Headers({ 'Content-Type': undefined });
    //     let options = new RequestOptions({ headers: headers });
    //     this.makeFileRequest('http://192.168.43.190:8000/media-upload/', options, this.filesToUpload).then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.error(error);
    //     });
    // }
    //  makeFileRequest(url: string, params, files: Array<File>) {
    //     return new Promise((resolve, reject) => {
    //         var formData: any = new FormData();
    //         var xhr = new XMLHttpRequest();
    //         for(var i = 0; i < files.length; i++) {
    //             formData.append("media", files[i], files[i].name);
    //         }
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState == 4) {
    //                 if (xhr.status == 201) {
    //                     resolve(JSON.parse(xhr.response));
    //                 } else {
    //                     reject(xhr.response);
    //                 }
    //             }
    //         }
    //         xhr.open("POST", url, true);
    //         xhr.send(formData);
    //     });
}

//  <div class="col s12 m8 l8 offset-l3">
//                        <input type="file" (change)="fileChangeEvent($event)" placeholder="Upload file..." />
//                         <button type="button" (click)="upload()">Upload</button>
//                     </div>