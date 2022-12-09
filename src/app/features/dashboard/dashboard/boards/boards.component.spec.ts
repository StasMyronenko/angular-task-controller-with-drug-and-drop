import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsComponent } from './boards.component';
import {Observable, of} from "rxjs";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../../../board/board/board.model";
import {HttpService} from "../../../../core/services/http/http.service";
import {ChangeDetectorRef} from "@angular/core";
import {Store} from "@ngrx/store";
import {CookieService} from "../../../../core/services/cookie/cookie.service";
import {FormControl} from "@angular/forms";
import {sortOptionsEnumerateBoard} from "../dashboard.model";

const mockChangeDetectorRef = {
  detectChanges() {}
}

const mockStore = {
  dispatch() {
    return of(undefined);
  },
  select() {
    return of([])
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

describe('BoardsComponent', () => {
  let component: BoardsComponent;
  let fixture: ComponentFixture<BoardsComponent>;

  const sortBy = new FormControl(sortOptionsEnumerateBoard.title);
  const reverse = new FormControl(false)
  const search = new FormControl('');
  const queryData = {reverse: reverse, sortBy: sortBy, search: search};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsComponent ],
      providers: [
        {
          provide: HttpService,
          useValue: mockHttpService
        },
        {
          provide: ChangeDetectorRef,
          useValue: mockChangeDetectorRef
        },
        {
          provide: Store,
          useValue: mockStore
        },
        {
          provide: CookieService,
          useValue: mockCookieService
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardsComponent);
    component = fixture.componentInstance;
    component.queryData = queryData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
