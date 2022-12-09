import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  getCookie(key: string): string {
    const res: Array<any> = [...document.cookie.matchAll(new RegExp(`(${key}=)([^;]*)`, 'g'))]
    if (res && res[res.length - 1]) {
      return res[res.length - 1][2]
    }
    return '';
  }
}
