import { Component, OnInit } from '@angular/core';
import {LoginHttpService} from "./login-http.service";
import {LoginModel, LoginResponse} from "./login.model";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // TODO Зробити Outside в FormComponent для написання функції роботи форми з зовнішніх компонентів

  constructor(private httpService: LoginHttpService) { }

  saveToken(data: HttpResponse<LoginResponse>) {
    document.cookie = `jwt_token=${data.body?.accessToken}`
    alert('Success')
  }

  async sendData(data: LoginModel | {}) {
    this.httpService.loginUser(data).subscribe((info)=>this.saveToken(info))
  }
  ngOnInit(): void {
  }

}
