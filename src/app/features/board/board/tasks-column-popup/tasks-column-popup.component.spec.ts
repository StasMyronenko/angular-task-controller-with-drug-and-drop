import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksColumnPopupComponent } from './tasks-column-popup.component';
import {LoginModel} from "../../../login/login/login.model";
import {RegisterRequest} from "../../../register/register/register.model";
import {EditBoardModel} from "../board.model";
import {of} from "rxjs";
import {HttpService} from "../../../../core/services/http/http.service";
import createSpyObj = jasmine.createSpyObj;

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of('test')
  }
}

describe('TasksColumnPopupComponent', () => {
  let component: TasksColumnPopupComponent;
  let fixture: ComponentFixture<TasksColumnPopupComponent>;
  const boardId = 1;
  const title = 'test';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksColumnPopupComponent ],
      providers: [
        {
          provide: HttpService,
          useValue: mockHttpService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksColumnPopupComponent);
    component = fixture.componentInstance;
    component.title = title;
    component.boardId = boardId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return string from getUrl', () => {
    const data = component.getUrl();
    expect(data).toBeInstanceOf(String);
  })

  it('should call sendRequest on submit', () => {
    const e = createSpyObj('e', ['preventDefault'], {target: ['#FFF']});
    spyOn(mockHttpService, 'sendRequest').and.returnValue(of({body: {columns_color: []}}));
    component.submitForm(e);
    expect(mockHttpService.sendRequest).toHaveBeenCalled()
  })
});
