import { Component} from '@angular/core';

@Component({
    moduleId: module.id, 
    template: ` <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href=""> <img src="https://s3-ap-southeast-1.amazonaws.com/healthylabs/website/mainpage/logosmall.png"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a [routerLink]="['/hospitalbi/Metricsdashboard']">Metrics dashboard</a>
                </li>
                <li class="dropdown">
                     <a [routerLink]="['/hospitalbi/Conversion']">Conversion</a>
                 </li>
                <li class="dropdown">
                     <a [routerLink]="['/hospitalbi/CustomQueries']">Custom Queries</a>
                </li>     
             </ul>
             </div>
        </nav>
<body>  
<main> 
   <div class="outer-outlet">
            <router-outlet></router-outlet>
        </div>  
</main>
</body> 


`
})
export class HospitalBIComponent{ 

}

// <thb-footer> 
// </thb-footer>