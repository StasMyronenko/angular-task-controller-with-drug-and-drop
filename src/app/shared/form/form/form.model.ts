import {FormControl} from "@angular/forms";


export interface formFieldData {
  placeholder: string,
  name: string,
  type: string,
}

export interface formField extends formFieldData{
  field: FormControl
}
