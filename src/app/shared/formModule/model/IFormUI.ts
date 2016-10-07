import {IKeyValue} from '../../model/ICommon';

export interface IFormUI {
    form: {
        name: string,
        id: string
    },  
    class : string,
    common: IFormUICommon,
    enableSidebar ?: boolean,
    sidebarSize?: number,
    items: IFormUIItem[],
    // first key is source field name, second is destination field name,
    // value is {source field value to its destination options.}
    optionChange?: {[id:string]: {[id:string]:
        {[id:string]: IKeyValue[]}}},
    optionChangeAsync?: {[id:string]:  {
                            [id:string]: IAsyncData
                        }},    
    defaultOption?: IKeyValue[]
};


export interface IAsyncData{
    api: string,
    type: 'GET' | 'POST',
    data: IAsyncPostParams[]
}

export interface IAsyncPostParams{
    name: string,
    source: string
}

export interface IFormUICommon{
    compact: boolean,
    verticalUI?: boolean
};

export interface IFormUIItem {
    customHtml?: string,
    label?: string,
    hint?: string,
    type?: string,
    name?: string,  
    defaultValue?: any,
    placeHolder ?: string,
    rowClass?: string,
    rowCount?:number,
    class?: string,
    properties ?: string,
    columnSize ?: number,
    id?: string,
    required ?: boolean,
    options?: IKeyValue[],
    /**groupName is required in case of siblings */
    group?: IFormUIGroupInfo, 
    siblings?: IFormUIItem[]
    //children?: IFormUIItem[]

    // table related members.
    // checkout feedback table.
    headers?: {
        key:string,
        value:string
    }[],
    rows?: IFormUIItem[]
};

export interface IFormUIGroupInfo{
    name ?: string
}