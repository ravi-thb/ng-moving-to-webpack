import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

    checkLogin(url: string): boolean {
      console.log("autoGuard called");
      if (this.authService.isLoggedIn()) { 
        console.log("user is logged In");
        return true;
      }else{
          window.location.href = '/auth/login';
          return false;
      }
    }
}