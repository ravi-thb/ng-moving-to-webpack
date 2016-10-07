import { Component, OnInit, ElementRef, Inject, Input } from '@angular/core';
import {FeedService} from './feed.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

declare var jQuery:any;

@Component({
    selector: 'feed-body',
    moduleId: module.id,
    templateUrl: './indfeed.component.html',
    providers: [FeedService]
})
export class FeedBodyComponent{
    @Input() feeds = {};
    //feeds: any;
    elementRef: ElementRef;
    // filesToUpload: Array<file>;

    constructor(private feedService: FeedService) {
        // this.filesToUpload=[];
    }

    // // saveFeed(feedData){
    // //     console.log(JSON.stringify(feedData));
    // //     this.feedService.saveUpdatedFeed(feedData);
    // // }

    // // saveFeed(feedData, )

    // filesChangeEvent(fileInput: any){
    //     this.filesToUpload = <Array<file>> fileInput.target.files;
    //     console.log(this.filesToUpload);
    // }

    // upload(feedData) {
    //     let headers = new Headers({ 'Content-Type': undefined });
    //     let options = new RequestOptions({ headers: headers });
    //     var formData = new FormData();
    //     for(let file of this.filesToUpload){
    //         formData.append("media", file, file.name);
    //     }
    //     formData.append('object', feedData);
    //     //  for(var i = 0; i < files.length; i++) {
    //     //         formData.append("media", files[i], files[i].name);
    //     //     }


    //     this.makeFileRequest('/user-engagement/feed/saveonefeed', options, this.filesToUpload).then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.error(error);
    //     });
    // }
    //  makeFileRequest(url: string, params, files: Array<File>) {
    //     return new Promise((resolve, reject) => {
    //         // var formData: any = new FormData();
    //         var xhr = new XMLHttpRequest();
    //         // for(var i = 0; i < files.length; i++) {
    //         //     formData.append("media", files[i], files[i].name);
    //         // }
    //         let formData = files;
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState == 4) {
    //                 if (xhr.status == 201) {
    //                     resolve(JSON.parse(xhr.response));
    //                 } else {
    //                     reject(xhr.response);
    //                 }
    //             }
    //         }
    //         xhr.open("POST", url, true);
    //         xhr.send(formData);
    //     });
    // }
}
