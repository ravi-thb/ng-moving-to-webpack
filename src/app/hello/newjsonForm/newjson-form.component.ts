import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import { Observable } from 'rxjs/Rx';

import {DynamicFormService, DynamicCheckboxModel, DynamicFormControlModel, DynamicFormArrayModel} from
 "@ng2-dynamic-forms/core";
import {JsonFormComponent} from '../../shared/formModule/jsonForm/json-form.component';
import {IFormUI} from '../../shared/formModule/model/IFormUI';
import {LocalStoreService} from '../../shared/coreModule/local-store-service';

@Component({
    moduleId: module.id,
    selector: "form-basic-example",
    template: `
        <dynamic-json-form [formUIObservable]='formUI$'>
        </dynamic-json-form>
    `
})

export class NewJsonFormExampleComponent implements OnInit {
    private formUI$:Observable<IFormUI>;
    constructor(private _localService:LocalStoreService){

    }
    ngOnInit() {
        let temp = require('./newexample').formUI;
        this.formUI$ = this._localService.set("exampleform", temp);
        console.log(JSON.stringify(temp));
    }
}