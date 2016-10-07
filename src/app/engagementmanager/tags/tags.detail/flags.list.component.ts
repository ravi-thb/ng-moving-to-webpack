import { Component, OnInit, ElementRef, Inject, Input } from '@angular/core';
import {TagsService} from '../tags.service';

declare var jQuery:any;

@Component({
    selector: 'flag-list',
    moduleId: module.id,
    templateUrl: './flags.list.component.html',
    providers: []
})
export class FlagListComponent{
    @Input() flagList: any = [];
    @Input() tagName: string;
    selectedFlag: any;
    flagDetails: any;
    //feeds: any;
    elementRef: ElementRef;

    constructor(private tagsService: TagsService) {
    }

    updateSelectedFlag(flagName: any){
        this.selectedFlag = flagName;
        this.tagsService.getFlagDetails(flagName)
            .subscribe(data=>{
                this.flagDetails = data.result.flagDetails;
            })
    }
}
