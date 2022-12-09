import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import {Observable, of} from "rxjs";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../board.model";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../../core/services/http/http.service";

const mockStore = {
  dispatch() {
    return new Observable(subscriber => {
      subscriber.next({});
      subscriber.complete();
    });
  }
};

const mockHttpService = {
  sendRequest: (url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST') => {
    return of({body: 'test'})
  }
}

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  const boardId = 1;
  const progress = 0;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
      providers: [
        {
          provide: Store,
          useValue: mockStore
        },
        {
          provide: HttpService,
          useValue: mockHttpService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    component.boardId = boardId;
    component.progress = progress;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string', () => {
    const answer = component.getTasksUrl();
    expect(answer).toBeInstanceOf(String);
  })

  it('should call http.sendRequest', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue(of({body: 'test'}));
    component.addTaskRequest({title: 'test', description: 'test'})
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call subscribe with dispatch', () => {
    spyOn(mockStore, 'dispatch')
    component.addTaskRequest({title: 'test', description: 'test'})
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
