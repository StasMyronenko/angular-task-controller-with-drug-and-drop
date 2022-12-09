import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {of} from "rxjs";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../core/services/http/http.service";
import {LoginModel} from "../../login/login/login.model";
import {RegisterRequest} from "../../register/register/register.model";
import {EditBoardModel} from "../../board/board/board.model";
import { Observable } from 'rxjs';
import {CookieService} from "../../../core/services/cookie/cookie.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockStore = {
    dispatch() {
      return of(undefined);
    }
  };

  const mockHttpService = {
    sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST') {
      return new Observable(subscriber => {
        subscriber.next({});
        subscriber.complete();
      })
    }
  }

  const mockCookieService = {
    getCookie(key: string) {
      return 'testString'
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {
          provide: Store,
          useValue: mockStore
        },
        {
          provide: HttpService,
          useValue: mockHttpService
        },
        {
          provide: CookieService,
          useValue: mockCookieService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCookie', () => {
    spyOn(mockCookieService, 'getCookie');
    component.getUrl();
    expect(mockCookieService.getCookie).toHaveBeenCalled();
  })
});
