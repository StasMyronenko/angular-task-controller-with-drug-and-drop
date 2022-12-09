import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmarkComponent } from './xmark.component';

describe('XmarkComponent', () => {
  let component: XmarkComponent;
  let fixture: ComponentFixture<XmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onXmark.emit()', () => {
    spyOn(component.onXmark, 'emit');
    const icon = fixture.nativeElement.querySelector('.xmark');
    icon.click();
    expect(component.onXmark.emit).toHaveBeenCalled();
  })
});
