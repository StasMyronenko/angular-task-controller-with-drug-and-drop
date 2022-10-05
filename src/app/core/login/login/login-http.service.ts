import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {LoginModel, LoginResponse} from "./login.model";
import {catchError, Observable, throwError} from "rxjs";

const loginUrl = "http://localhost:3000/login"

@Injectable()
export class LoginHttpService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    alert(error.error)
    return throwError(() => new Error(error.error))
  }

  loginUser(data: LoginModel | {}): Observable<HttpResponse<LoginResponse>> {
    const res = this.http.post<LoginResponse>(loginUrl, data, { observe: 'response' })
      .pipe(catchError(this.handleError))
    // console.log(res)
    return res
  }

}
