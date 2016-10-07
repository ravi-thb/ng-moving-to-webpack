import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable() 
export class ReportService {

   private myData:any;
   private myFile:any;

    constructor(private http : Http){ 
        
    }
   
   getReport(){
        // return this.http.get('http://jsonplaceholder.typicode.com/posts').map((data: any)=>{
        //     this.myData = data;
        // })
        this.myData=  this.http.get('/patient-view/lab-reports')
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        console.log(this.myData);
        return this.myData;
    };
    // sendFile(files: File[]){



    //     let headers = new Headers();
    //     headers.append('Content-Type','application/json');
    //     let options = new RequestOptions({ headers: headers });

    //     let formData: FormData = new FormData();
    //     for (let i = 0; i < files.length; i++) {
    //         formData.append("uploads[]", files[i], files[i].name);
    //     }
    //     this.myFile=  this.http.post('patient-view/view-report?reportId=3MD-42-3&userId=56c47da9c8fb072cb09b3083',formData,options)
    //         .map((res:Response) => res.json())
    //         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    //     console.log(this.myFile);
    //     return this.myFile;
    // };
}