import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RemoteApiService} from '../../shared/coreModule/remote-api.service';
import {LocalStoreService} from '../../shared/coreModule/local-store-service';



@Injectable()
export class TagsService {

    private myData: any;
    private tags: any;

    constructor(private http: Http, private _remoteService:RemoteApiService,
            private _localStore: LocalStoreService){};

    getTagsList(){
        let body = JSON.stringify({});
        let url = '/user-engagement/tags/gettags';
        return this._remoteService.getLocalStoreRef(url, null);
    }

    getFlagsForTag(tagName?: string){
        let url = '/user-engagement/tags/getflagsfortag';
        let body = JSON.stringify({tagName: tagName});
        if(!tagName){
            body = JSON.stringify({tagName: tagName});
        }
        let flagListData = this._remoteService.postData(url, body);
        return flagListData;
    }

    getFlagDetails(flagName: string){
        let url = "/user-engagement/tags/getflagdetails";
        let body = JSON.stringify({flagName: flagName});
        let flagData = this._remoteService.postData(url, body);
        return flagData;
    }


}