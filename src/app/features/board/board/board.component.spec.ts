import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {of} from "rxjs";
import {LoginModel} from "../../login/login/login.model";
import {RegisterRequest} from "../../register/register/register.model";
import {EditBoardModel} from "./board.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../core/services/http/http.service";

const mockActivatedRoute = {
  snapshot: {
    params: {
      id: 1
    }
  }
}

const mockStore = {
  dispatch() {
    return of(undefined);
  },
  select() {
    return of({tasks: []})
  }
};

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of({body: {
      id: 1,
      title: 'string',
      description: 'string',
      columns_color: {
        todo_color: '#FFF',
        in_progress_color: '#FFF',
        done_color: '#FFF',
      },
      creation_date: 'string',
      userId: 1
    }
    })
  }
}

const mockRouter = {
  navigate() {
    return new Promise(() => true)
  }
}

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
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
          provide: Router,
          useValue: mockRouter
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string from getBoardUrl', () => {
    const data = component.getBoardUrl()
    expect(data).toBeInstanceOf(String);
  })

  it('should call sendRequest from deleteBoard', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}})
    component.deleteBoard();
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call dispatch from deleteBoard', () => {
    spyOn(mockStore, 'dispatch');
    component.deleteBoard();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call navigate from deleteBoard', () => {
    spyOn(mockRouter, 'navigate');
    component.deleteBoard();
    expect(mockRouter.navigate).toHaveBeenCalled();
  })

  it('should call dispatch from ngOnInit', () => {
    spyOn(mockStore, 'dispatch');
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call pipe from search', () => {
    spyOn(component.search.valueChanges, 'pipe').and.returnValue(of(''));
    component.ngOnInit();
    expect(component.search.valueChanges.pipe).toHaveBeenCalled()
  })

  it('should call pipe from reverse', () => {
    spyOn(component.reverse.valueChanges, 'pipe').and.returnValue(of(''));
    component.ngOnInit();
    expect(component.reverse.valueChanges.pipe).toHaveBeenCalled()
  })

  it('should call pipe from sortBy', () => {
    spyOn(component.sortBy.valueChanges, 'pipe').and.returnValue(of(''));
    component.ngOnInit();
    expect(component.sortBy.valueChanges.pipe).toHaveBeenCalled()
  })
});
