import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectElementComponent } from './about-project-element.component';

describe('AboutProjectElementComponent', () => {
  let component: AboutProjectElementComponent;
  let fixture: ComponentFixture<AboutProjectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProjectElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
