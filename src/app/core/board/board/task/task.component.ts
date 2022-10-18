import { Component, OnInit, Input } from '@angular/core';
import {Task, TaskProgress} from "../board.model";
import {HttpService} from "../../../../shared/services/http/http.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() boardId!: number;
  showTaskSettings = false
  getBoardUrl() {
    return `http://localhost:4200/boards/${this.boardId}`
  }
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  editTask(data: {title: string, description: string}) {
    console.log(data)

  }

  deleteTask() {
    console.log('delete task')
  }

  archiveTask() {
    console.log('archive task')
  }

  addComment(data: any) {
    console.log('add comment')
  }

}
