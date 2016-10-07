import {IFormUI} from '../../shared/formModule/model/IFormUI';

export const formUI: IFormUI = {
    "form": {
        "id": "backanalyticsformid",
        "name": "backanalyticsform"
    },
    "common": {
        "compact": false
    },
    "class": "container",
    "items": [
        {
            "customHtml": `<h2>Score Summary</h2>
                <p>check it working</p>
            `
        },
        {
            "type": "select",
            "hint": "Heading",
            "name": "heading",
            "options": [
                {
                    "key": "All",
                    "value": "Select Heading"
                },
                {
                    "key": "heading1",
                    "value": "heading1"
                },
                {
                    "key": "heading2",
                    "value": "heading2"
                },
                {
                    "key": "heading3",
                    "value": "heading3"
                },
                {
                    "key": "heading4",
                    "value": "heading4"
                },
                {
                    "key": "heading5",
                    "value": "heading5"
                }
            ],
            "class": " my-select width-250",
            "siblings": [
                {
                    "type": "select",
                    "hint": "subheading",
                    "name": "subheading",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select subheading"
                        },
                        {
                            "key": "577e3c8946a3197c361eb9a8##subheading 1##[{\"name\":\"heading1\"}]",
                            "value": "subheading 1"
                        },
                        {
                            "key": "577e3ca946a3197c361eb9af##subheading 3##[{\"name\":\"heading1\"}]",
                            "value": "subheading 3"
                        },
                        {
                            "key": "578a461f52024198019901bf##THB Doctor 11##[{\"name\":\"heading2\"}]",
                            "value": "subheading 11"
                        },
                        {
                            "key": "577e3c8846a3197c361eb9a7##subheading 13##[{\"name\":\"heading2\"}]",
                            "value": "subheading 13"
                        },
                        {
                            "key": "577a3f73812c25c4303ebd5a##subheading 33##[{\"name\":\"heading2\"}]",
                            "value": "subheading 33"
                        }
                    ],
                    "class": " my-select width-250",
                    "siblings": []
                }
                
            ],
            "label": null
        },
        {
            "type": "select",
            "name": "timeSlot",
            "options": [
                {
                    "key": "All",
                    "value": "Select timeSlot"
                },
                {
                    "key": "Morning",
                    "value": "Morning"
                },
                {
                    "key": "Afternoon",
                    "value": "Afternoon"
                },
                {
                    "key": "Evening",
                    "value": "Evening"
                }
            ],
            "class": " my-select width-250",
            "siblings": [
                {
                    "type": "select",
                    "name": "customerType",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select customerType"
                        },
                        {
                            "key": "FirstTime",
                            "value": "FirstTime"
                        },
                        {
                            "key": "Repeat",
                            "value": "Repeat"
                        }
                    ],
                    "class": "my-select width-250",
                    "siblings": []
                },
                {
                    "type": "select",
                    "name": "serviceAvailed",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select serviceAvailed"
                        },
                        {
                            "key": "OPD",
                            "value": "OPD"
                        },
                        {
                            "key": "IPD",
                            "value": "IPD"
                        },
                        {
                            "key": "Diagnostics",
                            "value": "Diagnostics"
                        },
                        {
                            "key": "Pharmacy",
                            "value": "Pharmacy"
                        },
                        {
                            "key": "Radiology",
                            "value": "Radiology"
                        }
                    ],
                    "class": " my-select width-250",
                    "siblings": []
                }
            ],
            "label": null
        },
        {
            "type": "text",
            "name": "startDate",
            "defaultValue": "24-8-2016",
            "class": "pastDatePicker width-250",
            "siblings": [
                {
                    "type": "text",
                    "name": "endDate",
                    "defaultValue": "23-9-2016",
                    "class": "pastDatePicker width-250",
                    "siblings": []
                },
                {
                    "type": "hidden",
                    "name": "dummyplaceholder",
                    "siblings": []
                }
            ],
            "label": null
        },
        {
            "type": "button",
            "name": "save",
            "defaultValue": "Get Score",
            "columnSize": 2,
            "properties": "data-menuid=\"feedbackScoreSummaryTable\"",
            "class": "width-200",
            "siblings": [
                {
                    "type": "button",
                    "name": "save",
                    "defaultValue": "Get Comment",
                    "columnSize": 2,
                    "properties": "data-menuid=\"feedbackWordCloudRender\"",
                    "class": "width-200",
                    "siblings": []
                }
            ],
            "label": null
        },
        {
            "type":"textarea",
            "name":"textarea",
            "class": "width-200",
            "rowCount":5,
            "label":"Description",
            "siblings":[],
            "required":true
        },
        {
            "type":"checkbox",
            "name":"checkbox",
            "class": "width-200",
            "label":"check the to continue",
            "siblings":[],
            "required":true
        }
    ] 
}

// {
//             "type": "textarea",
//             "name": "Description",
//             "defaultValue": "tell us about you...",
//             "levelsrow": 5,
//             "class": "description width-250",
//             "siblings": [],
//             "label": null 
//         }