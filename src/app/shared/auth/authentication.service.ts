import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../login/user.model';
import {RemoteApiService} from '../coreModule/remote-api.service';
import {LocalStoreService} from '../coreModule/local-store-service';



@Injectable()
export class AuthenticationService {
  rolesData : string[];
  // rerouteToNewView:any;
  constructor(
    private _router: Router, private _remoteService: RemoteApiService, private localStorage: LocalStoreService){
      this.rolesData = [];
    }
  
  logout() {
    // localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
    console.log(user);
    let data = {username: user.username, password: user.password}
     this._remoteService.postData("/login",JSON.stringify(data) )
        .subscribe((result) => {
            console.log("login post result: "+ result);
            this.rolesData.push(result.roles[0]);
            console.log(this.rolesData);

            this.localStorage.set("role", result.roles);
            this.rerouteToNewView(this.rolesData);
          
            // this._router.navigate(['hospitalbi']);
        });
  }

rerouteToNewView(newRouteData:string[]){
  // let routeData = newRouteData;
  if(newRouteData.indexOf('hospitalgroup') >=0)
  {
    console.log('route to hosiptal view : ' + newRouteData)
    window.location.href = '/hospitalbi/Metricsdashboard'; 
  }else if(newRouteData.indexOf("doctoradmin") >= 0)
  {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/doctor-admin/delete-prescription';
  } else if(newRouteData.indexOf("doctorstaff") >= 0 || newRouteData.indexOf("departmentstaff") >= 0 ||
   newRouteData.indexOf("department") >= 0 || newRouteData.indexOf("doctor") >= 0)
  {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/patients';
  } else if(newRouteData.indexOf("radiologystaff") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/radiology';
  } else if(newRouteData.indexOf("pathologystaff") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/pathology';
  } else if(newRouteData.indexOf("department") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/department';
  } else if(newRouteData.indexOf("hospital") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/hospital';
  } else if(newRouteData.indexOf("lab") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/lab-view';
  } else if(newRouteData.indexOf("accountmanager") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/manageaccount';
  } else if(newRouteData.indexOf("provideradmin") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/provideradmin'; 
  } else if(newRouteData.indexOf("reception") >= 0)
   {
     console.log('route to hosiptal view :' + newRouteData);
     window.location.href = '/reception'; 
  }   else{
    window.location.href = '/patient-view';
  }
  
}

  isLoggedIn():boolean{
    if(this.rolesData){
      console.log("user is loggedIn");
      return true;
    }else{
       console.log("user is not loggedIn");
       return false;
    }
  }
   checkCredentials(){
    if (this.rolesData){
        console.log("role data found!!!");
        }else{
          window.location.href = '/auth/login';
          console.log("role Data not Found!!!");
    }
  } 
}