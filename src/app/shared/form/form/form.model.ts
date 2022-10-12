import {FormControl} from "@angular/forms";


export interface formFieldData {
  placeholder: string,
  name: string,
  type: string,
  disable?: boolean,
  initialValue?: string
}

export interface formField extends formFieldData{
  field: FormControl
}
