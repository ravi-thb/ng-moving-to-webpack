import {Component, Input} from '@angular/core';
import {LabButton} from './labreportbutton.component';
@Component({
    selector:'labreport-list',
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
            
                 <div class="card">
                    <div style="width:100%">
                        <div class="row"> 
                            <div class="col m6 l6">
                                <p style="margin:0px">{{report.BookingDateString}}</p>
                            </div>
                            <div class="col m6 l6">
                                <p style="text-align:right;margin:0px">Order Id : {{report.OrderId}}</p>
                            </div>
                        </div>
                  </div> 
                  <div class="divider">
                  </div>
                  <div class="row">
                    <lab-button [report] = "report"></lab-button>
                   <div> 
                 </div>
            </div>
         
             
    `
})

export class LabReportList{
    @Input() report = {};
}