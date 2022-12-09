import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTileComponent } from './board-tile.component';

describe('BoardTileComponent', () => {
  let component: BoardTileComponent;
  let fixture: ComponentFixture<BoardTileComponent>;

  const board = {
    id: 1,
    title: 'test',
    description: 'test',
    columns_color: {
      todo_color: '#FFF',
      in_progress_color: '#000',
      done_color: '#FAFAFA',
    },
    creation_date: '12/12/12',
    userId: 1,
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardTileComponent);
    component = fixture.componentInstance;
    component.board = board;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
