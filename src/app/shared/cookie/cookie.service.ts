import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  getCookie(key: string): string {
    const res: Array<string> | null = document.cookie.match(new RegExp(`(${key}=)([^;]*)`))
    return res ? res[2] : '';
  }
}