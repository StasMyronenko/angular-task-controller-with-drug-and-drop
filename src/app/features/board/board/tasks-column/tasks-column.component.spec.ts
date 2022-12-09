import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksColumnComponent } from './tasks-column.component';
import {Observable, of} from "rxjs";
import {RegisterRequest} from "../../../register/register/register.model";
import {LoginModel} from "../../../login/login/login.model";
import {EditBoardModel} from "../board.model";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../../core/services/http/http.service";

const mockStore = {
  dispatch() {
    return of(undefined);
  }
};

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST') {
    return {
      subscribe: () => {}
    }
  }
}

describe('TasksColumnComponent', () => {
  let component: TasksColumnComponent;
  let fixture: ComponentFixture<TasksColumnComponent>;

  const boardId = 1;
  const colorObject = '#fff';
  const progress = 0;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksColumnComponent ],
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

    fixture = TestBed.createComponent(TasksColumnComponent);
    component = fixture.componentInstance;
    component.boardId = boardId;
    component.progress = progress;
    component.colorObject = colorObject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger preventDefault', () => {
    const e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
    component.allowDrop(e);
    expect(e.preventDefault).toHaveBeenCalled();
  })

  it('should trigger dispatch from drop', () => {
    const e = jasmine.createSpyObj('e', [ 'dataTransfer.setData' ]) as DragEvent;
    spyOn(mockStore, 'dispatch');
    component.drop(e);
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should trigger dispatch from drop', () => {
    const e = jasmine.createSpyObj('e', [ 'dataTransfer.setData' ]) as DragEvent;
    spyOn(component, 'editTask');
    component.drop(e);
    expect(component.editTask).toHaveBeenCalled();
  })

  it('should trigger sendData from editTask', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}})
    component.editTask(1, {progress: 0})
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should return string from getTaskUrl', () => {
    const data = component.getTaskUrl(1);
    expect(data).toBeInstanceOf(String);
  })
});
