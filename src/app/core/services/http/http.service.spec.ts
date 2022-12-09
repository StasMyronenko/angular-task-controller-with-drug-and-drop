import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import SpyObj = jasmine.SpyObj;
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import createSpyObj = jasmine.createSpyObj;
import {CookieService} from "../cookie/cookie.service";
import {of, throwError} from "rxjs";

describe('HttpService', () => {
  let httpClientSpy: SpyObj<HttpClient>;
  let cookieServiceSpy: SpyObj<CookieService>
  let service: HttpService;

  beforeEach(() => {
    httpClientSpy = createSpyObj('HttpClient', ['request'])
    cookieServiceSpy = createSpyObj('CookieService', ['getCookie'])
    service = new HttpService(httpClientSpy, cookieServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http.request', () => {
    httpClientSpy.request.and.returnValue(of({body: {}}))
    service.sendRequest('/url');
    expect(httpClientSpy.request).toHaveBeenCalled()
  })
});
