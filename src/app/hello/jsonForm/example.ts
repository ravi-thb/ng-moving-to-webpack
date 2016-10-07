import {IFormUI} from '../../shared/formModule/model/IFormUI';

export const formUI: IFormUI = {
    "form": {
        "id": "feedbackanalyticsformid",
        "name": "feedbackanalyticsform"
    },
    "common": {
        "compact": false
    },
    "class": "container",
    "items": [
        {
            "customHtml": `<h2>Feedback Score Summary</h2>
                <p>check it working</p>
            `
        },
        {
            "type": "select",
            "hint": "Speciality",
            "name": "speciality",
            "options": [
                {
                    "key": "All",
                    "value": "Select Speciality"
                },
                {
                    "key": "Pediatrician",
                    "value": "Pediatrician"
                },
                {
                    "key": "Gynaecologist",
                    "value": "Gynaecologist"
                },
                {
                    "key": "Gastroenterology",
                    "value": "Gastroenterology"
                },
                {
                    "key": "IVF",
                    "value": "IVF"
                },
                {
                    "key": "Others",
                    "value": "Others"
                }
            ],
            "class": " my-select width-250",
            "siblings": [
                {
                    "type": "select",
                    "hint": "Doctor",
                    "name": "doctorId",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select Doctor"
                        },
                        {
                            "key": "577e3c8946a3197c361eb9a8##THB Doctor 2##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 2"
                        },
                        {
                            "key": "577e3ca946a3197c361eb9af##THB Doctor 3##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 3"
                        },
                        {
                            "key": "578a461f52024198019901bf##THB Doctor 11##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 11"
                        },
                        {
                            "key": "577e3c8846a3197c361eb9a7##THB Doctor 1##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 1"
                        },
                        {
                            "key": "577a3f73812c25c4303ebd5a##THB Doctor##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor"
                        }
                    ],
                    "class": " my-select width-250",
                    "siblings": []
                },
                {
                    "type": "select",
                    "hint": "Channel",
                    "name": "channel",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select Channel"
                        },
                        {
                            "key": "Friends&Family",
                            "value": "Friends&Family"
                        },
                        {
                            "key": "OutdoorBranding",
                            "value": "OutdoorBranding"
                        },
                        {
                            "key": "PrintAd(Newspaper/Adv.)",
                            "value": "PrintAd(Newspaper/Adv.)"
                        },
                        {
                            "key": "Digital(Website/Facebook)",
                            "value": "Digital(Website/Facebook)"
                        },
                        {
                            "key": "TVAdv/Radio",
                            "value": "TVAdv/Radio"
                        },
                        {
                            "key": "JustDial/Groupon",
                            "value": "JustDial/Groupon"
                        },
                        {
                            "key": "DoctorReferral",
                            "value": "DoctorReferral"
                        },
                        {
                            "key": "Corporate",
                            "value": "Corporate"
                        },
                        {
                            "key": "SMS/Call/E-mail",
                            "value": "SMS/Call/E-mail"
                        },
                        {
                            "key": "InHouseReferral",
                            "value": "InHouseReferral"
                        },
                        {
                            "key": "Leaflet",
                            "value": "Leaflet"
                        },
                        {
                            "key": "Others",
                            "value": "Others"
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
                    "name": "sdummyplaceholder",
                    "siblings": []
                }
            ],
            "label": null
        },
        {
           "type":"radio", 
           "name":"basicRadioGroup",
            "label": "Example Input",
            "options":[ 
                {   
                   "key": "Option 1",
                   "value": "option-1",
                     
                },
                {
                     "key": "Option 2",
                   "value": "option-2",
                },
                {   
                     "key": "Option 3",
                   "value": "option-3",
                },
                {
                    "key": "Option 4",
                   "value": "option-4",
                }
            ]
              
        },
        {
            "type":"checkboxgroup",
            "name": "checkboxgroup1",
            "label":"check the to continue",
            "siblings":[
                {
                    "type":"checkbox",
                    "name":"checkbox1",
                    "label":"female",
                    
                },
                {
                    "type":"checkbox",
                    "name":"checkbox2",
                    "label":"undefined",
                     
                },
                {
                    "type":"checkbox",
                    "name":"checkbox4",
                    "label":"still finding",
                     
                }
            ],
            "required":true
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
            "type": "loading"
        }
    ],
    "optionChange": {
        "speciality": {
            "doctorId": {
                "pediatrician": [
                    {
                        "key": "All",
                        "value": "Select Doctor"
                    },
                    {
                        "key": "577e3c8946a3197c361eb9a8##THB Doctor 2##[{\"name\":\"Pediatrician\"}]",
                        "value": "THB Doctor 2"
                    },
                    {
                        "key": "577e3ca946a3197c361eb9af##THB Doctor 3##[{\"name\":\"Pediatrician\"}]",
                        "value": "THB Doctor 3"
                    },
                    {
                        "key": "577e3ca946a3197c361eb9a3##THB Doctor 4##[{\"name\":\"Jorwal\"}]",
                        "value": "THB Doctor 4"
                    }
                ],
                "gynecologist": [
                    {
                        "key": "All",
                        "value": "Select Doctor"
                    },
                    {
                        "key": "578a461f52024198019901bf##THB Doctor 11##[{\"name\":\"Gynecologist\"}]",
                        "value": "THB Doctor 11"
                    },
                    {
                        "key": "577e3c8846a3197c361eb9a7##THB Doctor 1##[{\"name\":\"Gynecologist\"}]",
                        "value": "THB Doctor 1"
                    },
                    {
                        "key": "577a3f73812c25c4303ebd5a##THB Doctor##[{\"name\":\"Gynecologist\"}]",
                        "value": "THB Doctor"
                    }
                ],
                "all": [
                        {
                            "key": "All",
                            "value": "Select Doctor"
                        },
                        {
                            "key": "577e3c8946a3197c361eb9a8##THB Doctor 2##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 2"
                        },
                        {
                            "key": "577e3ca946a3197c361eb9af##THB Doctor 3##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 3"
                        },
                        {
                            "key": "578a461f52024198019901bf##THB Doctor 11##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 11"
                        },
                        {
                            "key": "577e3c8846a3197c361eb9a7##THB Doctor 1##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 1"
                        },
                        {
                            "key": "577a3f73812c25c4303ebd5a##THB Doctor##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor"
                        }
                    ],
                    "":  [
                        {
                            "key": "All",
                            "value": "Select Doctor"
                        },
                        {
                            "key": "577e3c8946a3197c361eb9a8##THB Doctor 2##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 2"
                        },
                        {
                            "key": "577e3ca946a3197c361eb9af##THB Doctor 3##[{\"name\":\"Pediatrician\"}]",
                            "value": "THB Doctor 3"
                        },
                        {
                            "key": "578a461f52024198019901bf##THB Doctor 11##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 11"
                        },
                        {
                            "key": "577e3c8846a3197c361eb9a7##THB Doctor 1##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor 1"
                        },
                        {
                            "key": "577a3f73812c25c4303ebd5a##THB Doctor##[{\"name\":\"Gynecologist\"}]",
                            "value": "THB Doctor"
                        }
                    ]
            }
        }
    },
    "defaultOption": [
        {
            "key": "All",
            "value": "All"
        }
    ]
}