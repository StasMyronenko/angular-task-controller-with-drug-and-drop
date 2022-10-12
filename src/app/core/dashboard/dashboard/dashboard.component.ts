import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {debounce, timer} from "rxjs";
import {CookieService} from "../../../shared/cookie/cookie.service";
import {HttpService} from "../../../shared/services/http/http.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  sortBy = new FormControl('title');
  reverse = new FormControl(false)
  search = new FormControl('');
  validateDataForm = new FormGroup({sortBy: this.sortBy, reverse: this.reverse, search: this.search})
  baseDashboardUrl = "http://localhost:3000/boards"
  getDashboardUrl = (): string => {
    const userId = this.cookie.getCookie("userId")
    return this.baseDashboardUrl + `?userId=${userId}`
  }
  ngOnInit() {}

  constructor(private cookie: CookieService, private http: HttpService) { }
}
