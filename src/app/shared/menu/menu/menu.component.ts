import { Component, Input } from '@angular/core';
import {GetCookieService} from "../../cookie/get-cookie.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() showLogo: boolean = true;
  // @Input() isAuthorized: boolean = false;  // mb create function for this
  @Input() writeName: boolean = false;

  isUserAuthorized() {

    return (Number(this.cookieService.getCookie('expiration_date')) - Date.now() > 0) &&
      (this.cookieService.getCookie("user") !== 'undefined')
  }

  getName() {
    return this.cookieService.getCookie("user")
  }

  constructor(private cookieService: GetCookieService) { }

}
