import {ClsConfig, DynamicFormValueControlModel, DynamicFormValueControlModelConfig} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_CONTROL_TYPE_HTML = "myhtml";



export class DynamicMyHtmlModel extends DynamicFormValueControlModel<string> {

    readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_HTML;

    constructor(config: DynamicFormValueControlModelConfig, cls?: ClsConfig) {
        super(config, cls);
    }
}