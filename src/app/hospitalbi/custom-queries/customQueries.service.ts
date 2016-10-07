import {Http , Headers, Response} from "@angular/http";
import { Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import 'rxjs/add/observable/throw'; 

@Injectable()
export class CustomQueriesService{
    
    headers : Headers = new Headers({
        'Content-Type':'application/json',
        Accept:'application/json'
    });

    api_url:string = "/bi/hospital/dummmy/get-custom-queries";
    constructor(private http : Http){
 
    }
    
     private getJson(response:Response){ 
        return response.json();
    }

    private checkForError(response:Response):Response{
        if(response.status >= 200 && response.status < 300){
            return response
        }else{
            var error = new Error(response.statusText);
            error['response'] = response;
            console.log(error);

            throw error;
        }
    }
     post(body):Observable<any>{
            return this.http.post(
                `/bi/hospital/dummmy/get-custom-queries`,
                JSON.stringify(body),
                {headers:this.headers}
                )
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
        }
    
}