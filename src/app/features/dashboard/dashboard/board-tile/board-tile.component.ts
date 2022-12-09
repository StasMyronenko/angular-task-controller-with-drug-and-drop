import { Component, Input } from '@angular/core';
import {BoardModel} from "../../../board/board/board.model";

@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent {
  @Input() board!: BoardModel;
  constructor() { }
}
