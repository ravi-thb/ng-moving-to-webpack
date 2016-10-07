import {Component, OnInit, Input,Output,EventEmitter} from "@angular/core";
import {FormGroup, FormControl, FormArray} from "@angular/forms";
import {DynamicFormService, DynamicCheckboxModel, DynamicSelectModel, DynamicFormOption,
        DynamicFormControlModel, DynamicFormGroupModel, DynamicFormArrayModel} from
    "@ng2-dynamic-forms/core";
 import { Observable } from 'rxjs/Rx';
import {IFormUI,IAsyncData, IAsyncPostParams} from '../model/IFormUI';
import {getModelFromFormUI} from './formui-builder-model';
import {IKeyValue} from '../../model/ICommon';
 
import {getSelectOptions} from './formui-builder-model';
import {dateToStr} from '../../utils/thbUtils';
import {RemoteApiService} from '../../../shared/coreModule/remote-api.service';

@Component({
    moduleId: module.id,
    selector: "dynamic-json-form",
    templateUrl: "./json-form.component.html"
})

export class JsonFormComponent implements OnInit {
    @Input() formUIObservable: Observable<IFormUI>;
    @Output() Checked = new EventEmitter();
    formUI: IFormUI;

    isAsync:boolean;
    curr:any;
    first:any;
    last:any;
    lastday:any;
    tlast:any;
    lastmonthFirstday:any;
    lastmonthLastDay:any;
    mydata:any;

     
    dynamicFormModel: Array<DynamicFormControlModel>;
    form: FormGroup;
    formId: string;
    formName: string;
    controlNameToPath :{[id: string]: string[]}

    constructor(private dynamicFormService: DynamicFormService,private  _remoteService: RemoteApiService) {
        this.controlNameToPath = {}; 
    }

    submit(){
        let newData = this.form.value;
        
        if(newData.timeGroup_group.duration == "last-week"){
            this.curr = new Date();
            this.first = dateToStr(this.curr);
            this.last = this.curr.getDate() - 6  ;
            this.lastday = new Date( this.curr.setDate( this.last)).toUTCString();
            this.tlast =  dateToStr(this.lastday);

            console.log(this.first);
            console.log(this.tlast);
        }else if(newData.timeGroup_group.duration == "last-month"){
            let now = new Date();
            let prevMonthLastDate = new Date(now.getFullYear(), now.getMonth(), 0);
            let prevMonthFirstDate = new Date(now.getFullYear(), (now.getMonth() - 1 + 12) % 12, 1);
            this.tlast = dateToStr(prevMonthFirstDate);
             this.first = dateToStr(prevMonthLastDate);

            console.log("first day : " + this.first );
            console.log("last day : " + this.tlast );


        }else if(newData.timeGroup_group.duration == "last3month"){
            let now = new Date();
            let prevMonthLastDate = new Date(now.getFullYear(), now.getMonth()-3, 0);
            let prevMonthFirstDate = new Date(now.getFullYear(), now.getMonth(), 1);
            this.tlast = dateToStr(prevMonthFirstDate);
             this.first = dateToStr(prevMonthLastDate);

            console.log("first day : " + this.first );
            console.log("last day : " + this.tlast );


        }
        else if(newData.timeGroup_group.duration == "last6month"){
            let now = new Date();
            let prevMonthLastDate = new Date(now.getFullYear(), now.getMonth()-5, 1);
            let prevMonthFirstDate = new Date(now.getFullYear(), now.getMonth(), 1);
            this.first = dateToStr(prevMonthFirstDate);
             this.tlast = dateToStr(prevMonthLastDate);

            console.log("first day : " + this.first );
            console.log("last day : " + this.tlast );


        }

        this.mydata = {
            "start": this.tlast,
            "end": this.first,
            "heading": newData.headingGroup_group.heading,  
            "subHeading": newData.headingGroup_group.subheading,
            "output": newData.headingGroup_group.output,   
            "filterKey": newData.headingGroup2_group.filter,
            'filterValue': newData.headingGroup2_group.filter 
        }
        let api_url = "/bi/hospital/get-stats";
        
         this._remoteService.postData(api_url, this.mydata).subscribe((queriesdata:any) => {
                    console.log("queries result data: "+ JSON.stringify(queriesdata));
                    this.Checked.emit(queriesdata);
                });


    }

    ngOnInit() {
        if (!this.formUIObservable) {
            console.error("jsonFormComponent input formUIObservable$ is null");
            return;
        }
        this.formUIObservable.subscribe((data) => this.viewFormUIItems(data));
        //this.exampleCheckboxControl.valueChanges.subscribe((value: string) => console.log("example checkbox field changed to: ", value, typeof value));
    }

    private viewFormUIItems(formui:IFormUI){
        this.formUI = formui;
        if(!this.formUI.items || !this.formUI.items[0]){
            console.error("jsonFormComponent form items are null.");
            return;
        }
        // convert json to form control models
        this.dynamicFormModel = getModelFromFormUI(this.formUI);
        // create form  for UI rendering.
        this.form = this.dynamicFormService.createFormGroup(this.dynamicFormModel);

        this.createControlNameToPath(this.dynamicFormModel);
        //console.log("new form json: "+ JSON.stringify(formui));
        this.form.valueChanges.subscribe((data) => {
            console.log("form value chagned to ankur: "+ JSON.stringify(data));
            // this.Checked.emit(data);
        });


        if (this.formUI.optionChange){
            this.handleOptionChange(this.formUI.optionChange, false);
            
        }
        if (this.formUI.optionChangeAsync){
            this.handleOptionChange(this.formUI.optionChangeAsync, true);
            
        }
     } 

    private handleOptionChange(optionChange,isAsync){
        for(let controlName in optionChange){
            let dependent = optionChange[controlName];
            let sourceCtrl = this.getControlElement(controlName);
            sourceCtrl.valueChanges.subscribe((value: string) => {
                console.log("sourceCtrl field changed to: ", value, typeof value);
               if(isAsync){
                    this.updateDependentControlAsync(controlName, value, dependent);                   
               }else{
                   this.updateDependentControl(controlName, value, dependent);
               }
            });
        }
    }

    private getControlElement(controlName){
        var controlPath = this.controlNameToPath[controlName]
        let sourceCtrl = <FormControl> this.form.get(controlPath);
        if (!sourceCtrl){
            console.error("not control found for: "+controlName);
            return null;
        }
        return sourceCtrl;
    }
    updateDependentControl(controlName:string, value:string, dependent:{[id:string]:
        {[id:string]: IKeyValue[]}}){
        if (!controlName || !value || !dependent){
            console.log("updateDependentContorl data missing");
            return;
        }
       
        value = value.trim().toLowerCase();
        for(let controlName in dependent){
            var values = dependent[controlName][value];
            if (!values){
                console.log("updateDependentControl values not found");
                values = dependent[controlName]["all"] || dependent[controlName][""]
                if (!values){
                    continue;   
                }
            }
            console.log("new options "+ JSON.stringify(values));
            let options = getSelectOptions(values);

            let selectModel = this.findModelById(controlName) as DynamicSelectModel<string>;
            if (!selectModel){ 
                console.error("no select model found for "+ controlName);
                return;
            } 
            console.log("selectModel "+ selectModel);
            selectModel.options = options ? options.map(optionConfig => new DynamicFormOption(optionConfig)) : [];
            selectModel.value = options && options[0] ? options[0].value as string: "";
        }
    }

    updateDependentControlAsync(controlName:string, value:string, dependent:{[id:string]: IAsyncData}){
        if (!controlName || !value || !dependent){
            console.log("updateDependentContorl data missing");
            return;
        }
        //let filterName = value;
        //let headingIdData = dependent.value.data.heading.control;
        // console.log("file hai ye 4:  " + headingIdData);
        // console.log("file hai ye data:  " + filterName);
       // value = value.trim().toLowerCase();//filter value 
        for(let controlName in dependent){
            var apiConfig:IAsyncData = dependent[controlName];
            console.log(apiConfig.api);
            this.resolveOptionAsyncApiConfig(apiConfig).subscribe((values) => {
                console.log("resolveOptionAsyncApiConfig value: "+values);
                this.updateSelectOptions(controlName, values.result);
            });   
        }       
    }
    resolveOptionAsyncApiConfig(apiConfig:IAsyncData):Observable<any[]> {
        let postData = this.resolveApiPostParams(apiConfig.data);
        // todo: handle get case.
        return this._remoteService.postData(apiConfig.api, postData);
    }

    resolveApiPostParams(postData:IAsyncPostParams[]){
        if (!postData || postData.length ==0){
            return {};
        }
        let params:any = {};
        for(let i=0; i < postData.length; i++){
            let input = postData[i];
            let controlName = input.source;
            let control = this.getControlElement(controlName);
            if (control){
                params[input.name] = control.value;
            }
        }
        return params;
    }

    updateSelectOptions(controlName, values){
        console.log("new options "+ JSON.stringify(values));
        let selectModel = this.findModelById(controlName) as DynamicSelectModel<string>;
        if (!selectModel){ 
            console.error("no select model found for "+ controlName);
            return; 
        }
        console.log("selectModel "+ selectModel);
        let options = getSelectOptions(values);
        selectModel.options = options ? options.map(optionConfig => new DynamicFormOption(optionConfig)) : [];
        selectModel.value = options && options[0] ? options[0].value as string: "";
    }
    add() {
        //this.dynamicFormService.addFormArrayGroup(this.basicArrayControl, this.basicArrayModel);
    }

    remove(index: number) {
        console.log(index);
        //this.dynamicFormService.removeFormArrayGroup(index, this.basicArrayControl, this.basicArrayModel);
    }

    clear() {
        //this.dynamicFormService.clearFormArray(this.basicArrayControl, this.basicArrayModel);
    }
    private findModelById(controlName:string):DynamicFormControlModel{
        let pathArray = this.controlNameToPath[controlName];
        if (!pathArray){
            return null;
        }
        let inputGroup = this.dynamicFormModel;
        let newModel:DynamicFormControlModel = null;
        for (let i=0; i < pathArray.length; i++){
            let pathStepName = pathArray[i];
            if (!pathStepName){continue;}
            newModel = <DynamicFormControlModel> 
                this.dynamicFormService.findById(pathStepName, inputGroup);
            if (!newModel){
                return null;
            }
            //todo: handle array case.
            if (newModel.type == "GROUP"){
                inputGroup = (newModel as DynamicFormGroupModel).group;  
            }
        }
        return newModel;
    }
    createControlNameToPath(formModelArray: Array<DynamicFormControlModel>,
         basePath: string[]= []) {
        if (!formModelArray){
            return;
        }
        for(let i =0; i < formModelArray.length; i++){
            let model:DynamicFormControlModel = formModelArray[i];
            if (!model){continue;}
            let controlId = model.id;
            if (model.type == "GROUP"){
                let groupModel = model as DynamicFormGroupModel;
                let newBasePath =  basePath.concat([controlId]);
                this.createControlNameToPath(groupModel.group, newBasePath);
                continue;
            }
            this.controlNameToPath[controlId] = basePath.concat([controlId])
        }
    }

    storeForm() {
        let json: string = JSON.stringify(this.dynamicFormModel);
        console.log("json output: "+ this.form.value);
        // ...store JSON in localStorage or transfer to server
    }
}