import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {LoginModel, LoginResponse} from "../../../features/login/login/login.model";
import {RegisterRequest} from "../../../features/register/register/register.model";
import {CookieService} from "../cookie/cookie.service";
import {BoardModel, EditBoardModel} from "../../../features/board/board/board.model";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient, private cookie: CookieService) { }

  private handleError(error: HttpErrorResponse) {
    alert(error.error)
    console.log(error)
    return throwError(() => new Error(error.error))
  }

  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): Observable<HttpResponse<LoginResponse | BoardModel | any>> {
    return this.http.request<LoginResponse | BoardModel>(method, url, {body: data, observe: 'response', headers: {
      authorization: 'Bearer ' + this.cookie.getCookie("jwt_token")
      } })
      .pipe(catchError(this.handleError))
  }
}
