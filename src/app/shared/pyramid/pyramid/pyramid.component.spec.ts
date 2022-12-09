import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidComponent } from './pyramid.component';
import createSpyObj = jasmine.createSpyObj;
import {SimpleChanges} from "@angular/core";

describe('PyramidComponent', () => {
  let component: PyramidComponent;
  let fixture: ComponentFixture<PyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyramidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change data', () => {
    const oldSide = component.side;
    component.size = 2;
    const simpleChange = {} as SimpleChanges;
    component.ngOnChanges(simpleChange);
    const newSide = component.side;
    jasmine.debugLog(`${oldSide}, ${newSide}`)
    expect(oldSide * component.size === newSide).toBeTrue();
  })
});
