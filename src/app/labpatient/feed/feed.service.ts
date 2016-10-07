import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable() 
export class FeedService {

   private myData:any;

    constructor(private http : Http){}
   
   getFeed(){
        // return this.http.get('http://jsonplaceholder.typicode.com/posts').map((data: any)=>{
        //     this.myData = data;
        // })
        this.myData=  this.http.get('/patient-view/get-feeds')
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        console.log(this.myData);
        return this.myData;
    };
}