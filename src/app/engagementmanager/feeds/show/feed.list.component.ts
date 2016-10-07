import { Component, OnInit, ElementRef, Inject }   from '@angular/core';
import {FeedService} from './feed.service';

declare var jQuery:any;

@Component({
    moduleId: module.id,
    templateUrl: './feed.list.component.html',
    styles: [``],
    providers: [FeedService]
})


export class FeedListComponent implements OnInit{

    feeds: any;
    tags : any = [];
    elementRef: ElementRef;
    constructor(@Inject(ElementRef) elementRef: ElementRef, private feedService: FeedService){
        this.elementRef = elementRef;
    }

    getFeeds(){
        // this.feeds = this.feedService.getFeeds()
        this.feedService.getAllFeeds().subscribe(feedData=>{
            this.feeds= feedData
        })
    }

    ngOnInit(){
        this.getFeeds();
        this.getTagsList();
    }

    getTaggedFeeds(tagName){
        console.log(tagName);
        this.feeds = [];
        this.feedService.getTaggedFeeds(tagName).subscribe(feedData=>{
            this.feeds = feedData
        })
    }

    getTagsList(){
        this.feedService.getTagsList()
            .subscribe((data) => {
                if (!data){
                    console.log("empty data in tag list");
                    this.tags = [];
                    return;
                }
                this.tags = data.result.enabledTagsList;
            })
    }

}