import {Component,Input,OnInit, ElementRef, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {FeedService} from './feed.service';
import {FeedBody} from './feedbody.component';
import {FeedDescription} from './feed-description';

declare var jQuery:any;


@Component({
    selector:'feed-container',
    styles:[`
        .font-size-18{
                font-size: 18px;
        }
        .font-size-12{
            font-size: 12px;
        }
    `],
    template:` 
    <div class="card-panel hoverable" style="padding: 8px;">
     <div class="row " style="margin: 4px;padding: 7px;display: flex;    margin-bottom: -21px;">
               <div class="col s2 m1 l1" style="    padding: 0;    margin: 0px;">
                <img src="{{feed.LogoUrl}}" style="height: 46px;" >
               </div> 
               <div class="col s9 m10 l10" style="    margin: 0;">
                   <h3 class="font-size-18" style="margin-top:3px;margin-bottom:2px;color:#23527c;">{{feed.Title}}</h3>
                   <p class="font-size-12" style="margin:0px">{{feed.PublishDateTimeString}}</p>
               </div> 
               
    </div>
            <feed-body [feed] = "feed"></feed-body>
            <feed-description [feed] = "feed"></feed-description>
    </div>

       <!-- Dropdown Trigger -->
  <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

  <!-- Dropdown Structure -->
  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider"></li>
    <li><a href="#!">three</a></li>
  </ul>

         
    `,
    providers:[FeedService]
})

export class FeedContainer implements OnInit {
    elementRef: ElementRef;
    @Input() feed = {};
    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        console.log("element is now ready for dropdown");
        jQuery(this.elementRef.nativeElement).find('.dropdown-button').dropdown({
             inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
    }
      
}