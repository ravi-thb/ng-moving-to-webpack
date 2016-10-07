import { Component } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

@Component({
    template: `<h5>Hey! I wanna say qwer</h5>
    <button (click)='moveMe()' name="test"> click moveme </button>
    `

})
export class QwerComponent {

    constructor(){

    }
    moveMe(){
        console.log("moveMe clicked");
    }
   
    
 }
