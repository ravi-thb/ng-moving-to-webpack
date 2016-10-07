import {Component, Input} from '@angular/core';

@Component({
    selector:'feed-description',
    styles:[`
            #align-button{
                text-align:right;
            }
            #padding-0{
                padding:0;
            }
    `],
    template:`
        <div class="row" *ngIf="!feed.SeeMoreText == ''" style="margin-bottom: 20px;">
            <div  class="col s12 m12 l12" *ngIf="!isFullDesc"  style="overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
                    
                        <span class="more">{{feed.SeeMoreText}}...</span>
                     
                </div>
                 <div  class="col s12 m12 l12" *ngIf="isFullDesc" >
                    
                        <p class="more">{{feed.SeeMoreText}}</p>
                     
                </div>
                <div  class="col s12 m12 l12" *ngIf="hideMeReadmore" id="align-button" >
                    <a (click) = "clickReadMore()"  >Read More</a>
                </div>
                <div  class="col s12 m12 l12" *ngIf="hideMeResdLess" id="align-button">
                    <a (click) = "clickReadLess()"  >Read Less</a>
                </div>
        </div> 
        <div class="row">
             <div *ngIf="!feed.BodyImageUrl == ''">
            <div class="col s12 l12 m12" style="text-align: center;">
                        <img src="{{feed.BodyImageUrl}}" style="width:50%" height="" >
                            
            </div>
     </div>  
        </div>       
    `
})

export class FeedDescription{

    @Input() feed = {};

    isReadMore:boolean = true; 
   isFullDesc:boolean = false;
   hideMeReadmore:boolean = true;
   hideMeResdLess:boolean = false;


    clickReadMore(){
        this.isReadMore = false;
        this.isFullDesc = true;
         this.hideMeResdLess = true;
         this.hideMeReadmore = false;

   }

   clickReadLess(){
       this.isReadMore = true;
       this.isFullDesc = false;
       this.hideMeResdLess = false;
         this.hideMeReadmore = true;
   }
}