import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksColumnPopupComponent } from './tasks-column-popup.component';

describe('TasksColumnPopupComponent', () => {
  let component: TasksColumnPopupComponent;
  let fixture: ComponentFixture<TasksColumnPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksColumnPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksColumnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
