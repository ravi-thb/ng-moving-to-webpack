import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RemoteApiService} from '../../../shared/coreModule/remote-api.service';
import {LocalStoreService} from '../../../shared/coreModule/local-store-service';



@Injectable()
export class FeedService {

    private myData: any;
    private tags: any;

    constructor(private http: Http, private _remoteService:RemoteApiService,
     private _localStore: LocalStoreService){};
    
    body = JSON.stringify({});
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    getAllFeeds(){
        this.myData=  this.http.post('/user-engagement/feed/getallfeeds', this.body, this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        console.log(this.myData);
        return this.myData;
    };

    getTaggedFeeds(tagNames: string){
        this.body = JSON.stringify({ tagName: tagNames });
        if(!tagNames){
            this.body = JSON.stringify({});
        }
        this.myData=  this.http.post('/user-engagement/feed/getallfeeds', this.body, this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return this.myData;
    }

    getTagsList(){
        this.body = JSON.stringify({});
        let url = '/user-engagement/tags/gettags';
        return this._remoteService.getLocalStoreRef(url, null);
    }

    saveUpdatedFeed(feedData, contentType?){
        this.body = JSON.stringify(feedData);
        let url = '/user-engagement/feed/saveonefeed';
        console.log('sending feeds at url ${url}')
        let postFeed = this._remoteService.postData(url, this.body, contentType);
        postFeed.subscribe(responseData=>{});
    }
}