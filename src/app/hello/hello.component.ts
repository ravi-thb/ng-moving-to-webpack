import { Component } from '@angular/core';
import {RemoteApiService} from '../shared/coreModule/remote-api.service';
import {LocalStoreService} from '../shared/coreModule/local-store-service';
import { Observable } from 'rxjs/Rx';


@Component({
    template: `<h5>Hey! I wanna say Hello</h5>
    <button (click)='testMe()' name="test"> click me </button>
    <button (click)='getFeedsAsync()' name="test"> click me getFeedsAsync </button>
        async
        {{storeData$ | async | json}}
    
    <br>
    <button (click)='getFeedsCloneAsync()' name="test"> click me getFeedsCloneAsync </button>
    {{storeDataClone$ | async | json}}

    <br>
    <button (click)='getFeeds()' name="test"> click me:getFeedss </button>
    <span> 
        {{feedsLength}}
    </span>
    <br>
        <input [(ngModel)]="index" (change)='getFeedPart()' />
    <label>Title:</label> {{partTitle$ | async | json}}
    <label>part @{{index}}:</label> {{part$ | async | json}}
    
    `

})
export class HelloComponent {
    index;
    feedsLength;
    feeds$ : Observable<any>;
    storeData$: Observable<any>;
    storeDataClone$: Observable<any>;
    part$ :  Observable<any>;
    partTitle$ :  Observable<any>;

    constructor(private  _remoteService: RemoteApiService, private _localService:LocalStoreService){
        this.index = 0;
    }
    testMe(){
        console.log("test me clicked");
    }

    getFeedsCloneAsync(){
        let api = "/testapi/gettime";
        this.storeDataClone$ = this._remoteService.getLocalStoreRef(api, {test:1});
    }
    getFeedsAsync(){
        let api = "/testapi/gettime";
        this.storeData$ = this._remoteService.getLocalStoreRef(api, null);
        // setTimeout(() => {
        //      console.log("setting cache servic data");
        //      this.storeData$ = this._remoteService.getCachedServerData(api, null);
        //      }, 1000);
         setTimeout(() => {
             console.log("setting asdf async now");
             this._localService.set(api, 'asdf asdf asdfa');
             }, 3000);
        // setTimeout(() => {
        //      console.log("postData asdf async now");
        //      this._remoteService.postData("/testapi/settime", {abc: 'asdf asdf asdfa'})
        //         .subscribe((data) => {
        //             console.log("post result data: "+data);
        //             this._localService.set(api, data);
        //         });
        //      }, 5000);
    }
    getFeeds(){
        let api = "/patient-view/get-feeds";
        this._remoteService.getData(api, null).subscribe((data) => {
            //console.log("feeds data"+ JSON.stringify(data));
            if (data && data.feeds){
                this._localService.set(api, data.feeds);
            }
            else{
                console.log("data is null");
                this._localService.set(api, []);
            }
            setTimeout(()=> {
                let newFeeds = [];
                for(let i =0; i < 10; i++){
                    newFeeds.push({Title: "data: "+ i + " at: " + new Date(), index: i});
                }
                this._localService.set(api, newFeeds);
            },10000)
        });
        this._localService.get(api).subscribe((feeds) => {
            if (feeds){
                console.log("got new feed data "+feeds.length);
                this.feedsLength = feeds.length;
            }
        });
    }
    getFeedPart(){
        let api = "/patient-view/get-feeds";
        console.log("feed parts called");
        this.part$ = this._localService.get([api, this.index ? this.index : 0]);
        this.partTitle$ = this._localService.get([api, this.index ? this.index : 0, "Title"]);
    }
    
 }
