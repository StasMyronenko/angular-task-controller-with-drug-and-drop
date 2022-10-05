import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {FormModule} from "../../shared/form/form.module";
import {LoginHttpService} from "./login/login-http.service";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TitleModule,
    FormModule
  ],
  providers: [LoginHttpService]
})
export class LoginModule { }
