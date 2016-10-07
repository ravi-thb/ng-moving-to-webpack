import {Component, Input} from '@angular/core';

@Component({
    selector:'lab-button',
    styles:[`
        .buttom-margin{
            margin-bottom:0px;
        }
        #LRmargin{
            margin-right: 5px;
            margin-left: 5px;
        } 
    `],
    template:`
         <div class="col m12 l12 s12" *ngFor="let report of report.Reports">
            <p class="buttom-margin">Report View :{{report.ContentType}} </p>
                <div style="display:flex;">
                    <p class="buttom-margin">Report 1 :  </p>
                    <a class="waves-effect waves-light btn" href="http://eloquentjavascript.net/Eloquent_JavaScript.pdf" id="LRmargin"  target="_blank">Download</a>
                    <a class="waves-effect waves-light btn" id="LRmargin" (click) = "onFileDownload()">Email</a>
                    <a class="waves-effect waves-light btn" id="LRmargin" (click) = "onShowMe()">View</a>
                    <a class="waves-effect waves-light btn" id="LRmargin" (click) = "onHideMe()" >Hide</a>
                     
                    
                </div>
                <div class="col m12 s12 l12" *ngIf="isShowMe" style="padding-top:10px">
                <iframe width="100%" height="300px" src="http://eloquentjavascript.net/Eloquent_JavaScript.pdf" 
                 frameborder="0" ></iframe>
               
                </div>
                
            </div>
    `
})

export class LabButton{
    @Input() report = {};

    isShowMe:boolean = false;
isHideMe:boolean = true;
 
onShowMe(){
    this.isShowMe = true;
    this.isHideMe = false;
}
onHideMe(){
    this.isShowMe = false;
    this.isHideMe = true;
}

// @Output() downloadfile = new EventEmitter();
 

 onFileDownload(){
    console.log("Download clicked");
 }
}