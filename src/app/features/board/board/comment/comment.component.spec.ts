import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import {Observable, of} from "rxjs";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../board.model";
import {HttpService} from "../../../../core/services/http/http.service";
import {Store} from "@ngrx/store";

const mockStore = {
  dispatch() {
    return of(undefined);
  }
};

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of('test')
  }
}

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  const comment = {
    id: 1,
    taskId: 1,
    name: 'string',
    title: 'string',
    comment: 'string',
    creation_date: '1/1/2022'
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      providers: [
        {
          provide: HttpService,
          useValue: mockHttpService
        },
        {
          provide: Store,
          useValue: mockStore
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = comment
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string', () => {
    const data = component.getCommentUrl();
    expect(data).toBeInstanceOf(String)
  })

  it('should call http.sendRequest', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.deleteComment();
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call dispatch on deleteComment', () => {
    spyOn(mockStore, 'dispatch');
    component.deleteComment();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
