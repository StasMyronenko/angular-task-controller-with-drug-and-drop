import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from "../../core/services/cookie/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {
  constructor(private cookieService: CookieService) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const res = (Number(this.cookieService.getCookie("expiration_date")) - Date.now()) > 0
    if (!res) {
      alert('not authorized')
    }
    return res
    // return true
  }
}
