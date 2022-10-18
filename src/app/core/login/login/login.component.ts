import { Component, OnInit } from '@angular/core';
import {LoginModel, LoginResponse} from "./login.model";
import {HttpResponse} from "@angular/common/http";
import {HttpService} from "../../../shared/services/http/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUrl = "http://localhost:3000/login"

  constructor(private httpService: HttpService) { }

  saveToken(data: HttpResponse<LoginResponse>) {
    document.cookie = `jwt_token=${data.body?.accessToken}`
    document.cookie = `userId=${data.body?.user.id}`
    document.cookie = `expiration_date=${Date.now() + 3600 * 1000}`
    document.cookie = `user=${data.body?.user.name}; path='/'`
    alert('Success')
  }

  async sendData(data: LoginModel | {}) {
    this.httpService.sendRequest(this.loginUrl, data).subscribe((info)=>this.saveToken(info))
  }
  ngOnInit(): void {
  }

}
