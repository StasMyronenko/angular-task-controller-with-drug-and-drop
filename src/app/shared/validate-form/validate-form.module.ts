import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ValidateFormComponent
  ],
  exports: [
    ValidateFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ValidateFormModule { }
