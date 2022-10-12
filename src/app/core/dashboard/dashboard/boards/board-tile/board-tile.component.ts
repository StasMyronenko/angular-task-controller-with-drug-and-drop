import { Component, OnInit, Input } from '@angular/core';
import {BoardModel} from "../../../../board/board/board.model";

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent implements OnInit {
  @Input() board!: BoardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
