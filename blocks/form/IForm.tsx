export interface IForm {
    type: string;
    alias: string;
    id: string;
    name: string;
    containers: IFormContainer[];
    messageOnSubmit: string;
    nextLabel: string;
    prevLabel: string;
    submitLabel: string;
    fieldTypes: object;
    allFields: IFormFieldSimple[];
}

interface IFormContainer {
    caption: string;
    rows: IFormRows[];
    id: string;
    sortOrder: number;
}

interface IFormRows {
    allFields: IFormField[];
    caption: string;
    cols: IFormCols[];
    id: string;
    sortOrder: number;
}

interface IFormCols {
    fields: IFormField[];
    width: number;
}

export interface IFormField {
    alias: string;
    allowMultipleFileUploads: boolean;
    allowedUploadTypes: boolean;
    caption: string;
    containsSensitiveData: boolean;
    cssClass: string;
    dataSourceFieldKey: string;
    fieldTypeId: string;
    id: string;
    invalidErrorMessage: string;
    mandatory: boolean;
    placeholder: string;
    regEx: string;
    requiredErrorMessage: string;
    settings: IFormFieldSettings;
    toolTip: string;
    values: string[];
    fieldType: any;
    value: any;
}

interface IFormFieldSimple {
    alias: string;
}

interface IFormFieldSettings {
    AutocompleteAttribute: string;
    DefaultValue: string;
    FieldType: string;
    MaximumLength: string;
    NumberOfRows: string;
    Placeholder: string;
    ShowLabel: string;
}



// for submissions

export interface IHTMLFormElement extends HTMLFormElement {
    readonly elements: IHTMLFormControlsCollection;
}

interface IHTMLFormControlsCollection extends HTMLFormControlsCollection {
    [key: string]: HTMLInputElement | any;
}
