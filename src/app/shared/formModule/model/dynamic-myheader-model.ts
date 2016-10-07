import {ClsConfig, DynamicFormValueControlModel, DynamicFormValueControlModelConfig} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_CONTROL_TYPE_HEADER2 = "myh2";

export class DynamicMyHeaderModel extends DynamicFormValueControlModel<string> {

    readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_HEADER2;

    constructor(config: DynamicFormValueControlModelConfig, cls?: ClsConfig) {
        super(config, cls);
    }
}