import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BoardModel, EditBoardModel} from "../../../../board/board/board.model";
import {HttpService} from "../../../../../shared/services/http/http.service";
import {Store} from "@ngrx/store";
import {selectFilteredBoards} from "../../../../../state/boards/boards.selector";
import {removeBoard, updateBoard} from "../../../../../state/boards/boards.actions";
import {selectTasksCount} from "../../../../../state/tasks/tasks.selector";

@Component({
  selector: 'app-board-tile-popup',
  templateUrl: './board-tile-popup.component.html',
  styleUrls: ['./board-tile-popup.component.scss']
})

export class BoardTilePopupComponent implements OnInit {
  @Input() board!: BoardModel;
  tasksPerColumn!: {todo: number, in_progress: number, done: number};
  showAllInfo: boolean = false;
  constructor(private http: HttpService, private store: Store) { }

  ngOnInit(): void {
    this.getTasksPerColumn()
  }

  getBoardUrl(id?: number){
    return `http://localhost:3000/boards/${id}`
  }

  changeData(data: EditBoardModel, id?: number) {
    const url = this.getBoardUrl(id)
    this.http.sendRequest(url, {title: data.title}, 'PATCH').subscribe(info => {
      this.board = info.body;
      alert('Done!')
      this.showAllInfo = false
      this.store.dispatch(updateBoard({board: this.board}))
    })
  }

  deleteBoard(id: number) {
    const url = this.getBoardUrl(id)
    this.http.sendRequest(url, {}, 'DELETE').subscribe(info => this.board = info.body);
    this.store.dispatch(removeBoard({boardId: id}));
  }

  getTasksPerColumn(){
    this.store.select(selectTasksCount(this.board.id)).subscribe(data=>{
      this.tasksPerColumn = data
    })
  }
}
