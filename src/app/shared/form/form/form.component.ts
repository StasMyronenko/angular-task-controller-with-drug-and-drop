import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {formField, formFieldData} from "./form.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Input() buttonSubmitText: string = '';
  @Input() data: Array<formFieldData> = [];
  @Input() formTitle: string = '';
  @Input() xmark: boolean = false;
  @Output() onXmark = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  formFields: Array<formField> = [];
  userForm: FormGroup = new FormGroup<any>({});

  constructor() { }
  ngOnInit() {
    const dataForGroup: any = {}
    this.data.forEach((element) => {
      const new_element: formField = {
        placeholder: element.placeholder,
        name: element.name,
        type: element.type,
        disable: element.disable,
        field: new FormControl(element.initialValue || '', [Validators.required])
      }
      this.formFields.push(new_element)
      dataForGroup[element.name] = new_element.field
    })
    this.userForm = new FormGroup(dataForGroup)
  }

  submitFunction(value: object = {}) {
    this.onSubmit.emit(value);
  }

  xmarkFunction() {
    this.onXmark.emit()
  }
}
