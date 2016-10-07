import { Component, OnInit, ElementRef, Inject }   from '@angular/core';
import {TagsService} from '../tags.service';

declare var jQuery:any;

@Component({
    moduleId: module.id,
    templateUrl: './tags.detail.layout.component.html',
    styles: [``],
    providers: [TagsService]
})


export class TagsDetailComponent implements OnInit{

    tags : any = [];
    flags: any = [];
    selectedTagName: any = "";

    elementRef: ElementRef;
    constructor(@Inject(ElementRef) elementRef: ElementRef, private tagsService: TagsService){
        this.elementRef = elementRef;
    }

    ngOnInit(){
        this.getTagsList();
        this.getFlagsForTag(null);
    }

    getTagsList(){
        this.tagsService.getTagsList()
            .subscribe((data) => {
                if (!data){
                    console.log("empty data in tag list");
                    this.tags = [];
                    return;
                }
                this.tags = data.result.enabledTagsList;
            })
    }

    getFlagsForTag(tagName: string){
        this.selectedTagName = tagName;
        let flagData = this.tagsService.getFlagsForTag(tagName);
        flagData.subscribe(flagDetails => {
            this.flags = flagDetails.result.flagsArray;
        });
    }

}