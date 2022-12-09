import { TestBed } from '@angular/core/testing';

import { DashboardGuard } from './dashboard.guard';
import {CookieService} from "../../core/services/cookie/cookie.service";
import {Route, UrlSegment} from "@angular/router";

const mockCookieService = {
  getCookie(key: string) {
    return String(Date.now() - 2000)
  }
}

describe('DashboardGuard', () => {
  let guard: DashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CookieService,
          useValue: mockCookieService
        }
      ]
    });
    guard = TestBed.inject(DashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not call alert', () => {
    spyOn(window, 'alert');
    const route = {} as Route;
    const urlSegment = {} as UrlSegment
    guard.canLoad(route, [urlSegment])
    expect(window.alert).toHaveBeenCalled();
  })
});
