import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {LoginModel} from "./login.model";
import {RegisterRequest} from "../../register/register/register.model";
import {EditBoardModel} from "../../board/board/board.model";
import {Observable, of} from "rxjs";
import {HttpService} from "../../../core/services/http/http.service";
import {HttpResponse} from "@angular/common/http";

const mockHttpService = {
  sendRequest(url: string, data: LoginModel | RegisterRequest | EditBoardModel | {} = {}, method: string = 'POST'): any {
    return of({})
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: HttpService,
          useValue: mockHttpService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-title')).not.toBe(null);
  });

  it('should render app-form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-form')).not.toBe(null);
  });

  it('should trigger sendRequest', () => {
    spyOn(mockHttpService, 'sendRequest').and.returnValue({subscribe: () => {}});
    component.sendData({});
    expect(mockHttpService.sendRequest).toHaveBeenCalled();
  });

  it('should call alert', () => {
    spyOn(window, 'alert');
    component.saveToken(new HttpResponse(
      {
        body: {
            accessToken: 'string',
            user: {
              email: 'string',
              name: 'string',
              id: 1
            }
          }}
      )
    );
  })

  it('should call saveToken', () => {
    spyOn(component, "saveToken");
    component.sendData({});
    expect(component.saveToken).toHaveBeenCalled();
  })
});

