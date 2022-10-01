import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {FormModule} from "../../shared/form/form.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TitleModule,
    FormModule
  ]
})
export class LoginModule { }
