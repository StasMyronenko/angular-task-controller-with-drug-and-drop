import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CookieService} from "../../../shared/cookie/cookie.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  sortBy = new FormControl('title');
  reverse = new FormControl(false)
  search = new FormControl('');
  baseDashboardUrl = "http://localhost:3000/boards"
  getDashboardUrl = (): string => {
    const userId = this.cookie.getCookie("userId")
    return this.baseDashboardUrl + `?userId=${userId}`
  }
  ngOnInit() {}

  constructor(private cookie: CookieService) { }
}
