import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmitFunction', () => {
    const button = fixture.nativeElement.querySelector('button');
    spyOn(component, 'onSubmitFunction');
    button.click();
    expect(component.onSubmitFunction).toHaveBeenCalled();
  })

  it('should call onSubmit.emit()', () => {
    const button = fixture.nativeElement.querySelector('button');
    spyOn(component.onSubmit, 'emit');
    button.click();
    expect(component.onSubmit.emit).toHaveBeenCalled();
  })
});
