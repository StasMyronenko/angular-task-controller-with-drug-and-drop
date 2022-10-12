import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from "../../shared/cookie/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {
  constructor(private cookieService: CookieService) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return (Number(this.cookieService.getCookie("expiration_date")) - Date.now()) > 0
  }
}
