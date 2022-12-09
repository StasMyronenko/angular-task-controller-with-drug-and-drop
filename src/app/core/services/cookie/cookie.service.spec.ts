import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';
import createSpyObj = jasmine.createSpyObj;

describe('CookieService method', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieService]
    });
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cookie', () => {
    const q = [['some data', 'some data 2', 'some data 3']];
    const data = createSpyObj('iter', ['next'], q);
    spyOn(document.cookie, 'matchAll').and.returnValue(data);
    expect(service.getCookie('')).toBeInstanceOf(String)
  })

  // it('should return cookie empty string', () => {
  //   const q = false;
  //   const data = createSpyObj('iter', ['next'], q);
  //   spyOn(document.cookie, 'matchAll').and.returnValue(data);
  //   expect(service.getCookie('')).toBe('')
  // })
});
