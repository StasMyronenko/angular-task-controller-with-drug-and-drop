import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import {LoginModel} from "../../login/login/login.model";
import {RegisterRequest} from "./register.model";
import {EditBoardModel} from "../../board/board/board.model";
import {of} from "rxjs";
import {HttpService} from "../../../core/services/http/http.service";

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of({body: {}})
  }
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        {
          provide: HttpService,
          useValue: mockHttpService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call alert', () => {
    spyOn(window, 'alert')
    const data = {
      name: 'string',
      email: 'string',
      password: 'string'
    }
    component.sendData(data);
    expect(window.alert).toHaveBeenCalledOnceWith('Fill all fields')
  })

  it('should call alert', () => {
    spyOn(window, 'alert')
    const data = {
      name: 'string',
      email: 'string',
      password: 'string',
      repeat_password: 'string2',
    }
    component.sendData(data);
    expect(window.alert).toHaveBeenCalledOnceWith('Different passwords')
  })

  it('should call alert', () => {
    spyOn(window, 'alert')
    const data = {
      name: 'string',
      email: 'string',
      password: 'string',
      repeat_password: 'string2',
    }
    component.sendData(data);
    expect(window.alert).toHaveBeenCalledOnceWith('Different passwords')
  })

  it('should call sendRequest', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}})
    const data = {
      name: 'string',
      email: 'string',
      password: 'string',
      repeat_password: 'string',
    }
    component.sendData(data);
    expect(mockHttpService.sendRequest).toHaveBeenCalled()
  })

  it('should call alert', () => {
    spyOn(window, 'alert');
    const data = {
      name: 'string',
      email: 'string',
      password: 'string',
      repeat_password: 'string',
    }
    component.sendData(data);
    expect(window.alert).toHaveBeenCalled()
  })
});
