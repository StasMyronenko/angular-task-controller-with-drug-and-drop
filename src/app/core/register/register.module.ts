import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {RegisterRoutingModule} from "./register-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {FormModule} from "../../shared/form/form.module";



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TitleModule,
    FormModule
  ]
})
export class RegisterModule { }
