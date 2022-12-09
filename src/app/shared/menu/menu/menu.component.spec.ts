import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {CookieService} from "../../../core/services/cookie/cookie.service";

const mockCookieService = {
  getCookie(key: string) {
    return String(Date.now() + 2000)
  }
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
     providers: [
        {
          provide: CookieService,
          useValue: mockCookieService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cookieService.getCookie from getName', () => {
    spyOn(mockCookieService, 'getCookie');
    component.getName();
    expect(mockCookieService.getCookie).toHaveBeenCalled();
  })
  it('should call cookieService.getCookie from isUserAuthorized', () => {
    spyOn(mockCookieService, 'getCookie');
    component.isUserAuthorized();
    expect(mockCookieService.getCookie).toHaveBeenCalled();
  })
  it('should render logo', () => {
    const divLogo = fixture.nativeElement.querySelector('.logo');
    expect(divLogo).not.toBeNull();
  })
  it('should not render logo', () => {
    component.showLogo = false;
    fixture.detectChanges()
    const divLogo = fixture.nativeElement.querySelector('.logo');
    expect(divLogo).toBeNull();
  })
  it('should return true', () => {
    expect(component.isUserAuthorized()).toBeTrue();
  })
});
