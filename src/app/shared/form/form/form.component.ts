import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import {formField, formFieldData} from "./form.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() buttonSubmitText: string = '';
  @Input() data: Array<formFieldData> = [];
  formFields: Array<formField> = [];
  constructor() { }
  ngOnInit() {
    this.data.forEach((element) => {
      const new_element: formField = {
        placeholder: element.placeholder,
        name: element.name,
        type: element.type,
        field: new FormControl('')
      }
      this.formFields.push(new_element)
    })
  }
}
