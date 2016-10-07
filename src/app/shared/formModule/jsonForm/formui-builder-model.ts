import {
    DynamicCheckboxModel,
    DynamicCheckboxGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicFormOptionConfig,
    DynamicTextAreaModel,
    DynamicFormArrayModel,
    DynamicFormGroupModel
} from "@ng2-dynamic-forms/core";
import {DynamicMyHeaderModel} from '../model/dynamic-myheader-model';
import {DynamicMyHtmlModel} from '../model/dynamic-myhtml-model';
import {DynamicMyButtonModel} from '../model/dynamic-mybutton-model';
import {IKeyValue} from '../../model/ICommon';
import {IFormUI, IFormUIItem, IFormUICommon} from '../model/IFormUI';
import {strMatch} from '../../utils/thbUtils';

export function getModelFromFormUI(formui: IFormUI): any[]{
    if (!formui || !formui.items){
        return [];
    }
    let results:any[] = [];
    let index = 0;
    for(let item of formui.items){
        let newItem = parseFormUIItem(item, formui.common, index.toString());
        if (!newItem){
            continue;
        }
        results.push(newItem);
    }
    return results;
}

function parseFormUIItem(formUIItem:IFormUIItem, common:IFormUICommon, index:string):any{
    if(formUIItem.customHtml){
        let model = new DynamicMyHtmlModel({
            id : 'customHtml'+index
        });
        model.name = formUIItem.customHtml;
        return model;
    }
    if (formUIItem.siblings && formUIItem.siblings[0]){
        return parseGroupModel(formUIItem, common, index);
    }
    return createModel(formUIItem, common, index);
}

function createModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string):any{
    console.log("formUIItem.type is : "+formUIItem.type);
    let type = formUIItem.type.trim().toLowerCase();
    switch(type){
        case "select":
            return createSelectModel(formUIItem,common, index);
        case "text":
            return createTextModel(formUIItem, common, index);
        case "button":
            return createButtonModel(formUIItem,common, index);
        case "textarea":
            return createTextAreaModel(formUIItem, common, index); 
        case "checkbox":
            return createCheckBoxModel(formUIItem,common,index);
        case "radio":
            return createRadioModel(formUIItem,common,index);
         

    }
    console.error(` ${type} type is not support in parseFormUIItem`);
    return null;
}

function parseGroupModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string):any{
    let groupModel :DynamicFormGroupModel = initGroupModel(formUIItem, common, index);
    let siblings = formUIItem.siblings;
    let size = calculateSiblingSize(siblings, common);
    formUIItem.rowClass = formUIItem.rowClass || 'col-sm-'+size; 
    if (formUIItem.type != "group" && formUIItem.type != "array"){
        let formItem  = createModel(formUIItem, common, index+"-0");
        if (formItem){
            groupModel.group.push(formItem);
        }
    }
    
    for(let i =0; i < siblings.length; i++){
        let sibling = siblings[i];
        sibling.rowClass = sibling.rowClass || 'col-sm-'+size;
        let formItem  = parseFormUIItem(sibling, common, index+"-"+i);
        if(!formItem){
            continue;
        }
        groupModel.group.push(formItem);
    }
    return groupModel;
}

function initGroupModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string){
    if (!formUIItem.group || !formUIItem.group.name){
        formUIItem.group =  {name: formUIItem.name+"_group" };
    }
    if (formUIItem.type == "checkboxgroup" ){
        return new DynamicCheckboxGroupModel({
            id: formUIItem.group.name,
            label: formUIItem.label,
            group: []
        },{
            grid: {
                container: 'row',
                control: formUIItem.rowClass
            }
        });
    }
    
    
    let groupModel = new DynamicFormGroupModel({
        id: formUIItem.group.name,
        group: []
    },{
        grid: {
            container: 'row',
            control: formUIItem.rowClass
        }
    });
    return groupModel;
}

function calculateSiblingSize(siblings:IFormUIItem[], common:IFormUICommon){
    return Math.floor(12/(siblings.length+1));
}
    

function createTextModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string){
    return new DynamicInputModel({
        id: formUIItem.name,
        label: formUIItem.label,
        value: formUIItem.defaultValue,
        //list: ["One", "Two", "Three", "Four", "Five"],
        maxLength: 51,
        placeholder: formUIItem.placeHolder,
        spellCheck: false,
        required: false
    },
        {
            element: {
                //label: "test-label"
                control: formUIItem.class
            },
            grid: {
                //container: 'row'
                control: formUIItem.rowClass
                // label: "col-xs-2"
            }
        });
}

function createCheckBoxModel(formUIItem:IFormUIItem,common:IFormUICommon,index:string){
    return new DynamicCheckboxModel({
        id:formUIItem.name,
        label:formUIItem.label
        //value: formUIItem.defaultValue || false,
    },
        {    
            element:{
                control:formUIItem.class
            },
            grid:{
                control:formUIItem.rowClass
            }

        });
}
// radioDynamicRadioGroupModel
function createRadioModel(formUIItem:IFormUIItem,common:IFormUICommon,index:string){
     let options = getSelectOptions(formUIItem.options);
     let model =  new DynamicRadioGroupModel<string>({
        id: formUIItem.name,
        label: formUIItem.label,
        options: options
       },
        {    
            element:{
                control:formUIItem.class
            },
            grid:{
                control:formUIItem.rowClass
            }

        });
    return model;
}
function createTextAreaModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string){
    return new DynamicTextAreaModel({
        id: formUIItem.name,
        label: formUIItem.label,
        value: formUIItem.defaultValue,
        placeholder: formUIItem.placeHolder,
        required: false
    },
        {
            element: {
                //label: "test-label"
                control: formUIItem.class
            },
            grid: {
                //container: 'row'
                control: formUIItem.rowClass
                // label: "col-xs-2"
            }
        });
}

export function getSelectOptions(options: IKeyValue[]):Array<DynamicFormOptionConfig>{
    let newOptions: Array<DynamicFormOptionConfig> = [];
    for(let i =0; options && i < options.length; i++){
        let temp:IKeyValue = options[i];
        newOptions.push({label: temp.value, value: temp.key});
    }
    return newOptions;
}

function createSelectModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string){
    let options = getSelectOptions(formUIItem.options);
    let defaultValue = formUIItem.defaultValue || (options && options[0] ? options[0].value: "");
    let model = new DynamicSelectModel<string>({
        id: formUIItem.name,
        label: formUIItem.label,
        options: options,
        value: defaultValue
    },
        {
            element: {
                //label: "test-label"
                control: formUIItem.class
            },
            grid: {
                 control: formUIItem.rowClass
                // label: "col-xs-2",
                //container: 'row'
            }
        });
    return model;
}
function createButtonModel(formUIItem:IFormUIItem, common:IFormUICommon, index:string){
    let model = new DynamicMyButtonModel({
        id: "button-"+ formUIItem.name,
        label: formUIItem.label,
        required: false
    },
        {
            element: {
                control: formUIItem.class
                //label: "test-label"
            },
            grid: {
                //container: 'row'
                control: formUIItem.rowClass
                // label: "col-xs-2"
            }
        });
    model.name = formUIItem.defaultValue || formUIItem.name;
    return model;
}
