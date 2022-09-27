import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';



@NgModule({
  declarations: [
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
