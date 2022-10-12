import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TitleModule} from "../title/title.module";
import {XmarkModule} from "../xmark/xmark.module";



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitleModule,
    XmarkModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
