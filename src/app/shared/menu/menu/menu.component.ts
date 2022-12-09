import { Component, Input } from '@angular/core';
import {CookieService} from "../../../core/services/cookie/cookie.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() showLogo: boolean = true;
  @Input() writeName: boolean = false;
  constructor(private cookieService: CookieService) { }
  isUserAuthorized() {

    return (Number(this.cookieService.getCookie('expiration_date')) - Date.now() > 0) &&
      (this.cookieService.getCookie("user") !== 'undefined')
  }

  getName() {
    return this.cookieService.getCookie("user")
  }
}
