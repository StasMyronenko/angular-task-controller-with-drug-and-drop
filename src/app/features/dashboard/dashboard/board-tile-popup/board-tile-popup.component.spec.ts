import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTilePopupComponent } from './board-tile-popup.component';
import {Observable, of} from "rxjs";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../../../board/board/board.model";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../../core/services/http/http.service";

const mockStore = {
  dispatch() {
    return of(undefined);
  },
  select(): any {
    return of({
      todo: 1,
      in_progress: 2,
      done: 3
    })
  }
};

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of({body: {}})
  }
}
const board = {
  id: 1,
  title: 'test',
  description: 'test',
  columns_color: {
    todo_color: '#FFF',
    in_progress_color: '#000',
    done_color: '#FAFAFA',
  },
  creation_date: '12/12/12',
  userId: 1,
}
describe('BoardTilePopupComponent', () => {
  let component: BoardTilePopupComponent;
  let fixture: ComponentFixture<BoardTilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTilePopupComponent ],
      providers: [
        {
          provide: Store,
          useValue: mockStore
        },
        {
          provide: HttpService,
          useValue: mockHttpService
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTilePopupComponent);
    component = fixture.componentInstance;
    component.board = board;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string', () => {
    const data = component.getBoardUrl(1);
    expect(data).toBeInstanceOf(String)
  })

  it('should call sendRequest from changeData', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}})
    component.changeData({title: 'test', description: 'test'}, 1);
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call getBoardUrl from changeData', () => {
    spyOn(component, 'getBoardUrl');
    component.changeData({title: 'test', description: 'test'}, 1);
    expect(component.getBoardUrl).toHaveBeenCalled();
  })

  it('should call sendRequest from deleteBoard', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}})
    component.deleteBoard(1);
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call dispatch from deleteBoard', () => {
    spyOn(mockStore, 'dispatch')
    component.deleteBoard(1);
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call select from getTasksPerColumn', () => {
    spyOn(mockStore, 'select').and.returnValue({subscribe: () => {}})
    component.getTasksPerColumn();
    expect(mockStore.select).toHaveBeenCalled();
  })

  it('should use dispatch on changeData', () => {
    spyOn(mockStore, 'dispatch');
    component.changeData({title: 'test', description: 'test'}, 1);
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
