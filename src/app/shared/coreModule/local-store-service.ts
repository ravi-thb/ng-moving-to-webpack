import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {getIn} from '../utils/get-in'

export type PropertySelector = string;
export type PathSelector = (string )[];


@Injectable() 
export class LocalStoreService {

   private results :{ [id:string] : BehaviorSubject<any>};

   constructor(private http : Http){
       this.results = {};
   }
   
   set(key:string, data:any){
       this.init(key);
       console.log(key);
       console.log(data);
       this.results[key].next(data);
       return this.results[key].asObservable();
   }

   setWithParam(key:string, param: any, data:any){
       let newKey = param ? JSON.stringify(param) : "";
       newKey = key+ newKey;
       return this.set(newKey, data);
   }

   getWithParam(key: PropertySelector | PathSelector, param:any){
       let newKey = this.getStringKey(key) as string;
       let paramStr:string = param ? JSON.stringify(param) : "";
       newKey = newKey + paramStr;
       if (Array.isArray(key) && key[0]){
           key[0] = newKey;
       }
       else{
           key = newKey;
       }
       return this.get(key);
   }

   get(key: PropertySelector | PathSelector){
       if (!key){
           return new BehaviorSubject<any>(null).asObservable(); 
       }
       if (Array.isArray(key)) {
           const [firstKey, ...restOfKeys] = key;
           let temp = this.results[firstKey];
           if (!temp) {
               temp = this.results[firstKey] = new BehaviorSubject<any>(null); 
           }
           return temp.map(data => getIn(data, restOfKeys));
       }

       let newKey = this.getStringKey(key) as string;
       this.init(newKey);

       if (this.results[newKey]){
           let temp = this.results[newKey] as BehaviorSubject<any>;
           return temp.asObservable();
       }
       this.results[newKey] = new BehaviorSubject<any>(null);
       return this.results[newKey].asObservable();
   }
   private init(selector:PropertySelector | PathSelector) {
        let key = this.getStringKey(selector);
        if (!this.results[key]){
            this.results[key] = new BehaviorSubject<any>(null);
        }
        return key;
   }
   private getStringKey(selector:PropertySelector | PathSelector):string{
       if (!selector){
           return selector as PropertySelector;
       }
        if (typeof selector === 'string' ||
            typeof selector === 'number' ||
            typeof selector === 'symbol') {
            return selector.toString();
        }
        else if (Array.isArray(selector)){
            return selector[0].toString();
        }
        return selector;
   }
}