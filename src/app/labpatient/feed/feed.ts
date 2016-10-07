import {Component ,OnInit } from '@angular/core';
import {Feedtype} from './feed-modal';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {FeedService} from './feed.service';

import {FeedContainer} from './feedcontainer.component';

@Component({
    selector:'feed',
    moduleId: module.id,
    templateUrl:"./feed.html",
     providers:[FeedService]
})

export class Feed implements OnInit{
feeds:any[];
      constructor(private feedService : FeedService){}
    ngOnInit(){
        this.getFeeds();
    }

    getFeeds(){
       this.feedService.getFeed().subscribe(data => {
             this.feeds = data.feeds as any[];
        });

    }

}