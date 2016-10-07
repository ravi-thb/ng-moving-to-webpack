import {Component , OnInit, ElementRef, Inject} from '@angular/core';

declare var jQuery:any;
@Component({
    selector:'radiology-modal',
    template:`
    <div class="row">
        <a class="waves-effect waves-light btn modal-trigger" href="#addreport">Add Report</a>
        
    </div>
    <div class="row">
        <a class="waves-effect waves-light btn modal-trigger" href="#Uploaddoc">Upload Document</a>
        
    </div>
        <!-- Modal Structure -->
        <div id="Uploaddoc" class="modal">
            <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
            <a (click)="closemodal()" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div> 
        </div>
         <!-- Modal Structure -->
        <div id="addreport" class="modal">
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

export class RadiologyModal implements OnInit{
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
    }

     ngOnInit() {
        console.log("element is now ready for dropdown");
        jQuery(this.elementRef.nativeElement).find('.modal-trigger').leanModal(
           {ready: function() { console.log('Ready'); }} 
        );
       
    }

    closemodal(){
         jQuery(this.elementRef.nativeElement).find('.modal-action').closeModal();
        //  jQuery(this.elementRef.nativeElement).find('.modal-action').openModal();
    }
}