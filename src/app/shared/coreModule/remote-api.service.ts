import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LocalStoreService} from './local-store-service';

@Injectable() 
export class RemoteApiService {

   private replayResultCache;//:Observable<any>;

   constructor(private http : Http, private localStore: LocalStoreService){
       this.replayResultCache = {};
   }
   
   getData(apiName, data){
        return  this.http.get(apiName, data)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            .catch((error:any) => 
                Observable.throw(error.json().error || 'Server error'));
    }

    postData(apiName, data, contentType?) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        if(contentType){
            headers = new Headers({ 'Content-Type': contentType });
        }
        let options = new RequestOptions({ headers: headers });

        let myData=  this.http.post(apiName, data, options)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            .catch((error:any) => 
                Observable.throw(error.json().error || 'Server error'));
        ///console.log(myData);
        return myData;
    }

    getLocalStoreRef(apiName, data){
        let result = this.getData(apiName, data);
        result.subscribe((newData) => {
            this.localStore.set(apiName, newData)
        });
        return this.localStore.getWithParam(apiName, data);
    }

    getCachedReplay(apiName, data){
       let param = data ? JSON.stringify(data) : "";
       let key = apiName + param;
        if (this.replayResultCache[key]){
            return this.replayResultCache[key];
        }
        return this.getWithReplay(apiName, data);
    }

    getWithReplay(apiName, data){
        let myData=  this.http.get(apiName, data)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            .publishReplay(1)
            .refCount()
            .catch((error:any) => 
                Observable.throw(error.json().error || 'Server error'));
        ///console.log(myData);
        let param = data ? JSON.stringify(data) : "";
        let key = apiName + param;
        this.replayResultCache[key] = myData
        return this.replayResultCache[apiName];
    }
}