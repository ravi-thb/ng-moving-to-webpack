import {Component} from '@angular/core';
import {AuthenticationService} from '../shared/auth/authentication.service';
import {User} from './user.model';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RemoteApiService} from '../shared/coreModule/remote-api.service';
import {LocalStoreService} from '../shared/coreModule/local-store-service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    styles:[`
        .loginscreen.middle-box {
                width: 300px;
            }
         .middle-box h1 {
                font-size: 170px;
            }
            .logo-name {
                color: #e6e6e6;
                font-size: 180px;
                font-weight: 800;
                letter-spacing: -10px;
                margin-bottom: 0;
            }
            h3, h4, h5 {
                margin-top: 5px;
                font-weight: 600;
            }   
            .m-t {
                margin-top: 15px;
            }
            .form-control, .single-line {
                background-color: #FFFFFF;
                background-image: none;
                border: 1px solid #e5e6e7;
                border-radius: 1px;
                color: inherit;
                display: block;
                padding: 6px 12px;
                transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
                width: 100%;
                font-size: 14px;
            }
    `],
    template: ` 
        
<div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
        <div>

            <h1 class="logo-name">
                <img  src="https://thehealthybillion.com/images/thb/landingpage/logobig.png" alt="THB"
                        width="100">
            </h1>
        </div>
        <h3>Welcome to  THB</h3>
        <p>
        </p>
        <form class="m-t login-form" role="form" id="login-form">
            <div class="form-group">
                <input name="username" [(ngModel)]="user.username" type="text" class="form-control" placeholder="Username" required="">
            </div>
            <div class="form-group">
                <input name="password" [(ngModel)]="user.password" type="password" class="form-control" placeholder="Password" required="">
            </div>
            <button type="button" (click)="login()"  class="btn btn-primary block full-width m-b login-button" id="login-button">Login</button>

            <a href="/forgot-password"><small>Forgot password?</small></a>
        </form>
        <div class="spinner hide" id="login-spinner">
            <div class="sk-spinner sk-spinner-three-bounce">
                <div class="sk-bounce1"></div>
                <div class="sk-bounce2"></div>
                <div class="sk-bounce3"></div>
            </div>
        </div>
 
    </div>
</div>
    	`
})

export class LoginComponent {
    public user = new User('','');
    public errorMsg = '';

    constructor(private _service:AuthenticationService) {
        console.log(`login component in auth module invoked!`);
    }

    login() {
        this._service.login(this.user);
        // .subscribe((result) => {
        //     console.log("LoginComponent result: "+ result);
        // });
        // if(!this._service.login(this.user)){
        //     this.errorMsg = 'Failed to login';
        // }
    }
}




          