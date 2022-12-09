import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import {Observable, of} from "rxjs";
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../board.model";
import {Store} from "@ngrx/store";
import {HttpService} from "../../../../core/services/http/http.service";
import {CookieService} from "../../../../core/services/cookie/cookie.service";

const mockStore = {
  select() {
    return of([])
  },

  dispatch() {
    return of(undefined);
  }
};

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of({body: 'test'})
  }
}

const mockCookieService = {
  getCookie(key: string) {
    return 'testString'
  }
}

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  const task = {
    id: 1,
    title: 'string',
    description: 'string',
    progress: 0,
    creation_date: '1/1/2022',
    archived: false,
    boardId: 1
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ],
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

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string from getTaskUrl', () => {
    const data = component.getTaskUrl();
    expect(data).toBeInstanceOf(String)
  })

  it('should return string from getCommentsUrl', () => {
    const data = component.getCommentsUrl();
    expect(data).toBeInstanceOf(String)
  })

  it('should call sendRequest from editTask', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.editTask({title: task.title, description: task.description})
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call sendRequest from deleteTask', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.deleteTask()
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call sendRequest from archiveTask', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.archiveTask()
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call sendRequest from addComment', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.addComment( {title_comment: task.title, comment: task.description})
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  })

  it('should call drag', () => {
    const task = fixture.nativeElement.querySelector('.task');
    const e = jasmine.createSpyObj('e', [ 'dataTransfer.setData' ]) as DragEvent;
    component.drag(e);
    expect(e.dataTransfer?.setData).not.toBeNull();
  })

  it('should call dispatch on ngOnInit', () => {
    spyOn(mockStore, 'dispatch');
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call dispatch on editTask', () => {
    spyOn(mockStore, 'dispatch');
    component.editTask({title: task.title, description: task.description})
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call dispatch on deleteTask', () => {
    spyOn(mockStore, 'dispatch');
    component.deleteTask();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call dispatch on archiveTask', () => {
    spyOn(mockStore, 'dispatch');
    component.archiveTask();
    expect(mockStore.dispatch).toHaveBeenCalled();
  })

  it('should call dispatch on addComment', () => {
    spyOn(mockStore, 'dispatch');
    component.addComment( {title_comment: task.title, comment: task.description})
    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
