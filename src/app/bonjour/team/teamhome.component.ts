import { Component } from '@angular/core';

@Component({
    template: `
        <p> I an the team component!</p>
        <a [routerLink]="['/bonjour/team/dev']">Dev</a>
        <a [routerLink]="['/bonjour/team/sales']">Sales</a>
        <div class="outer-outlet">
            <router-outlet></router-outlet>
        </div>
    `
})
export class TeamHomeComponent { }
