import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {XmarkModule} from "../../xmark/xmark.module";

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const xmark = true;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [XmarkModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.xmark = xmark;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onXmark', () => {
    fixture.detectChanges()
    spyOn(component, 'xmarkFunction');
    const XMark = fixture.nativeElement.querySelector('.fa-circle-xmark');
    XMark.click()
    expect(component.xmarkFunction).toHaveBeenCalled();
  });

  it('should don\'t render XMark', () => {
    component.xmark = false;
    fixture.detectChanges();
    const XMark = fixture.nativeElement.querySelector('app-xmark');
    expect(XMark).toBeNull();
  })

  it('should not render title', () => {
    const title = fixture.nativeElement.querySelector('.form-title');
    expect(title).toBeNull();
  })

  it('should render title', () => {
    component.formTitle = 'test';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.form-title');
    expect(title).not.toBeNull();
  })

  it('should should call onSubmit.emit', () => {
    const testData = {str: 'testdata'}
    spyOn(component.onSubmit, 'emit');
    component.submitFunction(testData);
    expect(component.onSubmit.emit).toHaveBeenCalledWith(testData);
  })

  it('should should call onSubmit.emit with empty object', () => {
    spyOn(component.onSubmit, 'emit');
    component.submitFunction();
    expect(component.onSubmit.emit).toHaveBeenCalledWith({});
  })

  it('should should call onXmark.emit', () => {
    spyOn(component.onXmark, 'emit');
    component.xmarkFunction();
    expect(component.onXmark.emit).toHaveBeenCalled()
  })

  it('should call formFields.push', () => {
    component.data = [{
      placeholder: 'string',
      name: 'string',
      type: 'string',
      disable: false,
      initialValue: 'string'
    }];
    fixture.detectChanges();
    spyOn(component.formFields, 'push');
    component.ngOnInit();
    expect(component.formFields.push).toHaveBeenCalled();
  })

  it('should use initial value empty string', () => {
    component.data = [{
      placeholder: 'string',
      name: 'string',
      type: 'string',
      disable: false,
    }];
    fixture.detectChanges();
    spyOn(component.formFields, 'push');
    component.ngOnInit();
    expect(component.formFields.push).toHaveBeenCalled();
  })
});
