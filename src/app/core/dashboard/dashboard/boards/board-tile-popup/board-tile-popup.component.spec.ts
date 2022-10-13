import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTilePopupComponent } from './board-tile-popup.component';

describe('BoardTilePopupComponent', () => {
  let component: BoardTilePopupComponent;
  let fixture: ComponentFixture<BoardTilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTilePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
