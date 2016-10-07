import {Component, Input, Output, ContentChild, EventEmitter,
     TemplateRef} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DynamicFormControlModel, DynamicFormControlComponent} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_UI_BASIC = "BASIC";

@Component({

    moduleId: module.id,
    selector: "dynamic-form-custom-control",
    templateUrl: "./dynamic-form-custom.component.html"
})

export class DynamicFormCustomComponent extends DynamicFormControlComponent {

    @Input() controlGroup: FormGroup;
    @Input() model: DynamicFormControlModel;
    @Output() buttonClick = new EventEmitter();

    @ContentChild(TemplateRef) customTemplate;

    readonly type: string = DYNAMIC_FORM_UI_BASIC;

    constructor() {
        super();
    }

    onButtonClick($event:any){
        console.log("onbuttonClick called "+$event.target);
        this.buttonClick.emit({event:$event});

    }
}