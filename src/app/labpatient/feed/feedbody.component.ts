import {Component , Input} from '@angular/core';

@Component({
    selector:'feed-body',
    template:`
        <div class="row" style="margin-bottom: 0px;">
                <div class="col s12 m12 l12">
                    <p>{{feed.Desc}}</p>
                </div>
        <div>
    `
})

export class FeedBody{

    @Input() feed = {};
}