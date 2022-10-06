import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {LoginModel, LoginResponse} from "../../../core/login/login/login.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    alert(error.error)
    return throwError(() => new Error(error.error))
  }

  sendRequest(url: string, data: LoginModel | {}): Observable<HttpResponse<LoginResponse>> {
    const res = this.http.post<LoginResponse>(url, data, { observe: 'response' })
      .pipe(catchError(this.handleError))
    // console.log(res)
    return res
  }
}
