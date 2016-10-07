import {Component, OnInit, ElementRef, Inject} from '@angular/core';

declare var jQuery:any;
@Component({
    selector:'lab-modal',
    template:`
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
            <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
            <a (click)="closemodal()" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div> 
    `
})

export class LabModal implements OnInit{
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
       
    ngOnInit() {
        console.log("element is now ready for dropdown");
        jQuery(this.elementRef.nativeElement).find('.modal-trigger').leanModal(
           {ready: function() { console.log('Ready');  }} 
        );
       
    }

    closemodal(){
         jQuery(this.elementRef.nativeElement).find('.modal-action').closeModal();
        //  jQuery(this.elementRef.nativeElement).find('.modal-action').openModal();
    }
       

}
