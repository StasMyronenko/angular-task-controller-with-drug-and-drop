import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {RegisterRequest} from "./register.model";
import {catchError, Observable, throwError} from "rxjs";

const registerUrl = 'http://localhost:3000/register';

@Injectable()
export class RegisterHttpService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    alert(error.error)
    return throwError(() => new Error(error.error))
  }

  registerUser(data: RegisterRequest | {}): Observable<HttpResponse<any>> {
    console.log(data)
    return this.http.post(registerUrl, data, { observe: 'response' }).pipe(catchError(this.handleError))
  }
}
