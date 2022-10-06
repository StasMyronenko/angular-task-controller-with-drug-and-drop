import { Component, OnInit } from '@angular/core';
import {RegisterInputData} from "./register.model";
import {HttpService} from "../../../shared/services/http/http.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerUrl = 'http://localhost:3000/register'

  constructor(private httpService: HttpService) { }

  sendData(data: RegisterInputData | any) {

    if (!data.repeat_password || !data.password || !data.name || !data.email) {
      alert('Fill all fields')
      return
    }

    if (data.password === data.repeat_password) {
      this.httpService.sendRequest(this.registerUrl, data).subscribe(info => alert(info.statusText))
    } else {
      alert('Different passwords')
    }
  }
  ngOnInit(): void {
  }

}
