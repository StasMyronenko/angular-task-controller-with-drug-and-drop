import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardComponent } from './add-board.component';
import {CookieService} from "../../../../core/services/cookie/cookie.service";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../../../board/board/board.model";
import {Observable, of} from "rxjs";
import {HttpService} from "../../../../core/services/http/http.service";
import {Store} from "@ngrx/store";

const mockStore = {
  dispatch() {
    return of({body: 'test'});
  }
};

const mockCookieService = {
  getCookie(key: string) {
    return 'testString'
  }
}

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST') {
    return of({body: 'test'})
  }
}

describe('AddBoardComponent', () => {
  let component: AddBoardComponent;
  let fixture: ComponentFixture<AddBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoardComponent ],
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

    fixture = TestBed.createComponent(AddBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendRequest', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue(of({body: 'test'}));
    component.sendData({title: 'test', description: 'test'});
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call dispatch on sendData', () => {
    spyOn(mockStore, 'dispatch').and.returnValue(of({body: 'test'}));
    component.sendData({title: 'test', description: 'test'});
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
