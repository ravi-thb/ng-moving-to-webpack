import {ClsConfig, DynamicFormValueControlModel, DynamicFormValueControlModelConfig} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_CONTROL_TYPE_BUTTON = "mybutton";

export class DynamicMyButtonModel extends DynamicFormValueControlModel<string> {

    readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_BUTTON;

    constructor(config: DynamicFormValueControlModelConfig, cls?: ClsConfig) {
        super(config, cls);
    }
}