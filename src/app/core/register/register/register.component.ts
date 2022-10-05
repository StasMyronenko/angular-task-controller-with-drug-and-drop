import { Component, OnInit } from '@angular/core';
import {RegisterHttpService} from "./register-http.service";
import {RegisterInputData} from "./register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: RegisterHttpService) { }

  sendData(data: RegisterInputData | any) {

    if (!data.repeat_password || !data.password || !data.name || !data.email) {
      alert('Fill all fields')
      return
    }

    if (data.password === data.repeat_password) {
      this.httpService.registerUser(data).subscribe(info => alert(info.statusText))
    } else {
      alert('Different passwords')
    }
  }
  ngOnInit(): void {
  }

}
