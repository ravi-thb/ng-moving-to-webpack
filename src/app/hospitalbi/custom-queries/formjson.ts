import {IFormUI} from '../../shared/formModule/model/IFormUI';

export const formUI: IFormUI = {
    "form": {
        "id": "customquiries",
        "name": "customquiriesForm"
    },
    "common": {
        "compact": false
    },
    "class": "container",
    "items": [
        {
            "type":"group",
            "name":"timeGroup",
            "siblings":[
                {
                    "type": "select",
                    "hint": "duration",
                    "name": "duration",
                    "options": [
                        {
                            "key": "All",
                            "value": "select duration"
                        },
                        {
                            "key": "last-week",
                            "value": "Last Week"
                        },
                        {
                            "key": "last-month",
                            "value": "Last Month"
                        },
                        {
                            "key": "last3month",
                            "value": "Last 3 Month"
                        },
                        {
                            "key": "last6month",
                            "value": "Last 6 Month"
                        },
                        {
                            "key": "last12month",
                            "value": "Last 12 Month"
                        },
                        {
                            "key": "month-to-date",
                            "value": "Month to-date"
                        },
                        {
                            "key": "quarter-to-date",
                            "value": "Quarter to-date"
                        },
                        {
                            "key": "fy-to-date",
                            "value": "FY to-date"
                        }
                    ],
                    "class": " my-select width-250 padding-10 bottom-margin-10",
                    "rowClass":"alignRight",
                    "siblings": []
                }
            ]
        },
        {
            "type": "group",
            "name": "headingGroup",
            "siblings": [
                {
                    "type": "select",
                    "hint": "heading",
                    "name": "heading",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select Heading"
                        },
                        {
                            "key": "enquiries",
                            "value": "enquiries"
                        },
                        {
                            "key": "booked appointment",
                            "value": "booked appointment"
                        },
                        {
                            "key": "done opd billing",
                            "value": "done opd billing"
                        },
                        {
                            "key": "done consultations",
                            "value": "done consultations"
                        }
                    ],
                    "class": "my-select width-250 padding-10 bottom-margin-10",
                    "siblings": []
                },
                {
                    "type": "select",
                    "hint": "subheading",
                    "name": "subheading",
                    "options": [
                        {
                            "key": "All",
                            "value": "select subheading"
                        }
                    ],
                    "class": " my-select width-250  padding-10 bottom-margin-10",
                    "siblings": []
                },
                {
                    "type":"select",
                    "hint":"output",
                    "name":"output",
                    "options":[
                        {
                            "key":"All",
                            "value":"Select output metric"
                        }
                    ],
                    "class":"my-select width-250 padding-10 bottom-margin-10",
                    "siblings":[]
                }
            ]
        },
        {
            "type":"group",
            "name": "headingGroup2",
            "siblings":[
                {
                    "type": "select",
                    "hint": "filter",
                    "name": "filter",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select filter"
                        } 
                    ],
                    "class": "my-select width-250  padding-10 bottom-margin-10",
                    "siblings": []
                },
                {
                    "type": "select",
                    "hint": "value",
                    "name": "value",
                    "options": [
                        {
                            "key": "All",
                            "value": "Select value"
                        } 
                    ],
                    "class": "my-select width-250 padding-10 bottom-margin-10",
                    "siblings": []
                }
            ]
         },
        {
            "type": "button",
            "name": "save",
            "defaultValue": "Submit Queries",
            "columnSize": 2,
            "properties": "data-menuid=\"feedbackScoreSummaryTable\"",
            "class": "btn btn-default width-250 padding-10 bottom-margin-10",
            "label": null      
        }
    ],
    "optionChangeAsync":{
        "filter":{
            "value":{
                "api":"/bi/hospital/get-filter-values",
                "type":"POST",
                "data":[{name: "heading", source: "heading"}, {name: "filter", source:"filter"}]
            }
        }
    },
    "optionChange": {
        "heading": {
            "subheading": {
                "enquiries": [
                    {
                        "key": "All",
                        "value": "select subheading"
                    },
                    {
                        "key": "time",
                        "value": "By time/week"
                    },
                    {
                        "key": "attendant",
                        "value": "By attendant"
                    },
                    {
                        "key": "mode",
                        "value": "By mode"
                    },
                    {
                        "key": "patient-location",
                        "value": "By patient location"
                    },
                    {
                        "key": "patient-age",
                        "value": "By patient age"
                    },
                    {
                        "key": "patient-type",
                        "value": "By patient type"
                    },
                    {
                        "key": "hospital",
                        "value": "By hospital"
                    },
                    {
                        "key": "specialty",
                        "value": "By specialty"
                    },
                    {
                        "key": "source",
                        "value": "By source"
                    },
                    {
                        "key": "activity",
                        "value": "By activity"
                    },
                    {
                        "key": "specialty",
                        "value": "By specialty"
                    },
                    {
                        "key": "status",
                        "value": "By status"
                    },
                    {
                        "key": "outcome",
                        "value": "By outcome"
                    },
                    {
                        "key": "time-to-closure",
                        "value": "By time-to-closure"
                    }
                ],
                "booked appointment": [
                    {
                        "key": "All",
                        "value": "select subheading"
                    },
                    {
                        "key": "time",
                        "value": "By time / week"
                    },
                    {
                        "key": "attendant",
                        "value": "By attendant"
                    },
                    {
                        "key": "location",
                        "value": "By location"
                    },
                    {
                        "key": "age",
                        "value": "By age"
                    },
                    {
                        "key": "patient-type",
                        "value": "By patient type"
                    },
                    {
                        "key": "hospital",
                        "value": "By hospital"
                    },
                    {
                        "key": "specialty",
                        "value": "By specialty"
                    },
                    {
                        "key": "doctor",
                        "value": "By doctor"
                    },
                    {
                        "key": "appointment-type",
                        "value": "By appointment type"
                    },
                    {
                        "key": "source",
                        "value": "By source (walk-in or enquiry source)"
                    },
                    {
                        "key": "slots",
                        "value": "By By schedule / slots (morning, afternoon, evening)"
                    },
                    {
                        "key": "status",
                        "value": "By status"
                    },
                    {
                        "key": "timebooked-to-actualslot",
                        "value": "By timebooked-to-actualslot"
                    }

                ],
                "done opd billing":[
                    {
                        "key":"All",
                        "value":"select subheading"
                    },
                    {
                        "key":"time",
                        "value":"By time / week"
                    },
                    {
                        "key":"billing",
                        "value":"By appointment / billing / helpdesk attendant"
                    },
                    {
                        "key":"location",
                        "value":"By location"
                    },
                    {
                        "key":"age",
                        "value":"By age"
                    },
                    {
                        "key":"ptype",
                        "value":"By patient type"
                    },
                    {
                        "key":"hospital",
                        "value":"By hospital"
                    },
                    {
                        "key":"specialty",
                        "value":"By specialty"
                    },
                    {
                        "key":"doctor",
                        "value":"By doctor"
                    },
                    {
                        "key":"stype",
                        "value":"By service type"
                    },
                    {
                        "key":"source",
                        "value":"By source (walk-in or enquiry source)"
                    },
                    {
                        "key":"slot",
                        "value":"By schedule / slots (morning, afternoon, evening)"
                    }
                ],
                "done consultations":[
                     {
                        "key":"All",
                        "value":"select subheading"
                    },
                    {
                        "key":"time",
                        "value":"By time / week"
                    }
                ]
            },
            "filter":{
                "enquiries":[
                   {
                        "key":"All",
                        "value":"select filter"
                    },
                    {
                        "key":"attendant-name",
                        "value":"Attendant name"
                    },
                    {
                        "key":"mode",
                        "value":"Mode"
                    },
                    {
                        "key":"location",
                        "value":"location"
                    },
                    {
                        "key":"age",
                        "value":"age"
                    },
                    {
                        "key":"type",
                        "value":"type"
                    },
                    {
                        "key":"hospital",
                        "value":"hospital"
                    },
                    {
                        "key":"specialty",
                        "value":"specialty"
                    },
                    {
                        "key":"source",
                        "value":"source"
                    },
                    {
                        "key":"activity",
                        "value":"activity"
                    },
                    {
                        "key":"status",
                        "value":"status"
                    },
                    {
                        "key":"outcome",
                        "value":"outcome"
                    }
                ],
                "booked appointment":[
                    {
                        "key":"All",
                        "value":"Select filter"
                    },
                    {
                        "key":"attendant-name",
                        "value":"Attendant Name"
                    },
                    {
                        "key":"location",
                        "value":"Location"
                    },
                    {
                        "key":"age",
                        "value":"Age"
                    },
                    {
                        "key":"ptype",
                        "value":"patient type"
                    },
                    {
                        "key":"hospital",
                        "value":"Hospital"
                    },
                    {
                        "key":"specialty",
                        "value":"Specialty"
                    },
                    {
                        "key":"doctor",
                        "value":"Doctor"
                    },
                    {
                        "key":"appointment-type",
                        "value":"Appointment type"
                    },
                    {
                        "key":"source",
                        "value":"Source (walk-in or enquiry source)"
                    },
                    {
                        "key":"slot",
                        "value":"Schedule / slots (morning, afternoon, evening)"
                    },
                    {
                        "key":"status",
                        "value":"Status"
                    }
                ],
                "done opd billing":[
                    {
                        "key":"All",
                        "value":"select filter"
                    },
                    {
                        "key":"billing",
                        "value":"Appointment / billing / helpdesk attendant"
                    },
                    {
                        "key":"location",
                        "value":"Location"
                    },
                    {
                        "key":"age",
                        "value":"Age"
                    },
                    {
                        "key":"ptype",
                        "value":"Patient Type"
                    },
                    {
                        "key":"hospital",
                        "value":"Hospital"
                    },
                    {
                        "key":"specilty",
                        "value":"Specialty"
                    },
                    {
                        "key":"doctor",
                        "value":"Doctor"
                    },
                    {
                        "key":"service",
                        "value":"Service Type"
                    },
                    {
                        "key":"source",
                        "value":"Source (walk-in or enquiry source)"
                    },
                    {
                        "key":"slot",
                        "value":"Schedule / slots (morning, afternoon, evening)"
                    }
                ],
                "done consultations":[
                    {
                        "key":"All",
                        "value":"Select filter"
                    },
                    {
                        "key":"source",
                        "value":"Source (walk-in or enquiry source)"
                    },
                    {
                        "key":"slot",
                        "value":"Schedule / slots (morning, afternoon, evening)"
                    },
                    {
                        "key":"plocation",
                        "value":"Patient Location"
                    },
                    {
                        "key":"age",
                        "value":"Patient Age"
                    },
                    {
                        "key":"ptype",
                        "value":"Patient type"
                    },
                    {
                        "key":"hospital",
                        "value":"Hospital"
                    },
                    {
                        "key":"specialty",
                        "value":"Specialty"
                    },
                    {
                        "key":"doctor",
                        "value":"Doctor"
                    },
                    {
                        "key":"vtype",
                        "value":"Visit Type (first-time, follow-up)"
                    },
                    {
                        "key":"service",
                        "value":"Services"
                    }
                ]
            },
            "output":{
                "enquiries":[
                    {
                        "key":"All",
                        "value":"Select output metrices"
                    },
                    {
                        "key":"enquiries",
                        "value":"# enquiries (default)"
                    },
                    {
                        "key":"uniquePatients",
                        "value":"# unique patients"
                    } 
                ],
                "booked appointment":[
                    {
                        "key":"All",
                        "value":"Select output metrices"
                    },
                    {
                        "key":"enquiries",
                        "value":"# appointments (default)"
                    },
                    {
                        "key":"uniquePatients",
                        "value":"# unique patients"
                    }
                ],
                "done opd billing":[
                    {
                        "key":"All",
                        "value":"Select output metrices"
                    },
                    {
                        "key":"enquiries",
                        "value":"# appointments (default)"
                    },
                    {
                        "key":"uniquePatients",
                        "value":"# unique patients"
                    },
                    {
                        "key":"revenue",
                        "value":"Revenue"
                    }
                ],
                "done consultations":[
                    {
                        "key":"All",
                        "value":"Select Output Metrices"
                    },
                    {
                        "key":"consultation",
                        "value":"# consultations"
                    },
                    {
                        "key":"servicesPrescribed",
                        "value":"# services prescribed"
                    },
                    {
                        "key":"servicesAvailed",
                        "value":"# services availed"
                    },
                    {
                        "key":"conversionRate",
                        "value":"Conversion rate"
                    }
                ]
            }
              
    }
  }
}