import { Component, OnInit, Input } from '@angular/core';
import {BoardModel, EditBoardModel, Task} from "../../../../board/board/board.model";
import {HttpService} from "../../../../../shared/services/http/http.service";

@Component({
  selector: 'app-ellipsis-button',
  templateUrl: './ellipsis-button.component.html',
  styleUrls: ['./ellipsis-button.component.scss']
})

// TODO Update boards list after edit/delete
export class EllipsisButtonComponent implements OnInit {
  @Input() board!: BoardModel;
  tasksPerColumn!: {todo: number, in_progress: number, done: number};
  showAllInfo: boolean = false;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.tasksPerColumn = this.getTasksPerColumn()
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
    })
  }

  deleteBoard(id?: number) {
    const url = this.getBoardUrl(id)
    this.http.sendRequest(url, {}, 'DELETE').subscribe(info => this.board = info.body)
    this.showAllInfo = false
  }

  getTasksPerColumn() {
    const res = {
      todo: 0,
      in_progress: 0,
      done: 0
    }

    // TODO give logic
    this.board.tasks.forEach((task) => {
      console.log(task)
    })
    return res
  }
}
