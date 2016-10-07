import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormsCoreModule} from "@ng2-dynamic-forms/core";
import {DynamicFormCustomComponent} from "./dynamic-form-custom.component";
import {JsonFormComponent} from './jsonForm/json-form.component'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicFormCustomComponent, JsonFormComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicFormCustomComponent,JsonFormComponent
    ]
})
export class DynamicFormsUIModule {}