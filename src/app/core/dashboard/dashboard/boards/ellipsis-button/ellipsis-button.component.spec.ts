import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisButtonComponent } from './ellipsis-button.component';

describe('EllipsisButtonComponent', () => {
  let component: EllipsisButtonComponent;
  let fixture: ComponentFixture<EllipsisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllipsisButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllipsisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
