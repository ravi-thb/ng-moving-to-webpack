import {
    DynamicCheckboxModel,
    DynamicCheckboxGroupModel,
    DynamicInputModel,
    DynamicRadioGroupModel,
    DynamicSelectModel,
    DynamicTextAreaModel,
    DynamicFormArrayModel,
    DynamicFormGroupModel
} from "@ng2-dynamic-forms/core";

export const BASIC_EXAMPLE_MODEL = [

    new DynamicSelectModel<string>({

        id: "basicSelect",
        label: "Example Select",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                disabled: true,
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            }
        ],
        value: "option-3"
    },
        {
            element: {
                label: "test-label"
            },
            grid: {
                // control: "col-xs-3",
                // label: "col-xs-2",
                container: 'row'
            }
        }),

    new DynamicInputModel({

        id: "basicInput",
        label: "Example Input",
        list: ["One", "Two", "Three", "Four", "Five"],
        maxLength: 51,
        placeholder: "example input",
        spellCheck: false,
        required: false
    },
        {
            element: {
                label: "test-label"
            },
            grid: {
                container: 'row'
                // control: "col-xs-3",
                // label: "col-xs-2"
            }
        }),

    new DynamicCheckboxGroupModel({

        id: "basicCheckboxGroup",
        label: 'check group here',
        //legend: "Example Checkbox Group",
        group: [
            new DynamicCheckboxModel(
                {
                    id: "checkboxGroup1",
                    label: "Checkbox 1",

                }
            ),
            new DynamicCheckboxModel(
                {
                    id: "checkboxGroup2",
                    label: "Checkbox 2"
                }
            )
        ]
    },
        {
            element: {
                label: "test-label",
                control: 'inline'
            },
            // grid: {
            //     control: "col-xs-3",
            //     label: "col-xs-2"
            // }
        }),

    new DynamicRadioGroupModel<string>({

        id: "basicRadioGroup",
        //legend: "Example Radio Group",
        options: [
            {
                label: "Option 1",
                value: "option-1",
            },
            {
                disabled: true,
                label: "Option 2",
                value: "option-2"
            },
            {
                label: "Option 3",
                value: "option-3"
            },
            {
                label: "Option 4",
                value: "option-4"
            }
        ],
        value: "option-3"
    },
        {
            element: {
                label: "test-label"
            },
            // grid: {
            //     control: "col-xs-3",
            //     label: "col-xs-2"
            // }
        }),

    new DynamicTextAreaModel({

        id: "basicTextArea",
        label: "Example Textarea",
        rows: 5,
        placeholder: "example Textarea"
    },
        {
            element: {
                label: "test-label"
            },
            grid: {
                // control: "col-xs-3",
                // label: "col-xs-2"
            }
        }),

    new DynamicFormGroupModel({

        id: "basicFormGroup1",
        //legend: "Nested Form Group 1",
        group: [
            new DynamicInputModel(
                {
                    id: "basicGroupInput1-1",
                    label: "Example Group Input 1-1",
                    value: "Test 1-1"
                },
                {
                    element: {
                        label: "test-label"
                    },
                    // grid: {
                    //     control: "col-xs-3",
                    //     label: "col-xs-2"
                    // }
                }
            ),
            new DynamicInputModel(
                {
                    id: "basicGroupInput1-2",
                    label: "Example Group Input 1-2",
                    value: "Test 1-2"
                },
                {
                    element: {
                        label: "test-label"
                    },
                    // grid: {
                    //     control: "col-xs-3",
                    //     label: "col-xs-2"
                    // }
                }
            ),
            new DynamicSelectModel<string>({
                id: "basicSelect",
                label: "Example Select",
                options: [
                    {
                        label: "Option 1",
                        value: "option-1",
                    },
                    {
                        disabled: false,
                        label: "Option 2",
                        value: "option-2"
                    },
                    {
                        label: "Option 3",
                        value: "option-3"
                    }
                ],
                value: "option-3"
            },
                {
                    element: {
                        label: "test-label"
                    },
                    // grid: {
                    //     control: "col-xs-3",
                    //     label: "col-xs-2",
                    //     container: 'row'
                    // }
                })]
    }),

    new DynamicFormGroupModel({

        id: "basicFormGroup2",
        //legend: "Nested Form Group 2",
        group: [
            new DynamicInputModel(
                {
                    id: "basicGroupInput2-1",
                    label: "Example Group Input 2-1",
                    value: "Test 2-1"
                },
                {
                    element: {
                        label: "test-label"
                    },
                    // grid: {
                    //     control: "col-xs-3",
                    //     label: "col-xs-2"
                    // }
                }
            ),
            new DynamicInputModel(
                {
                    id: "basicGroupInput2-2",
                    label: "Example Group Input 2-2",
                    value: "Test 2-2"
                },
                {
                    element: {
                        label: "test-label"
                    },
                    // grid: {
                    //     control: "col-xs-3",
                    //     label: "col-xs-2"
                    // }
                }
            )]
    }),

    new DynamicCheckboxModel({

        id: "basicCheckbox",
        label: "I do agree"
    },
        {
            element: {
                label: "test-label"
            },
            // grid: {
            //     control: "col-xs-3",
            //     label: "col-xs-2"
            // }
        })
];

export const BASIC_EXAMPLE_ARRAY_MODEL = [

    new DynamicFormArrayModel({

        id: "basicFormArray",
        initialCount: 5,
        label: "Example Array Model",
        createGroup: () => {
            return [
                new DynamicInputModel(
                    {
                        id: "basicArrayGroupInput",
                        label: "Example Array Group Input",
                        placeholder: "example array group input"
                    }
                )
            ];
        }
    })
];