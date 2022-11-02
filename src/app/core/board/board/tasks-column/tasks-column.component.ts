import { Component, OnInit, Input } from '@angular/core';
import {Task, TaskProgress} from "../board.model";
import {Store} from "@ngrx/store";
import {changeProgress} from "../../../../state/tasks/tasks.actions";
import {HttpService} from "../../../../shared/services/http/http.service";

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss']
})
export class TasksColumnComponent implements OnInit {

  @Input() bgColor: string = '#4F84FF';
  @Input() tasks: any = [];
  @Input() title: string = '';
  @Input() boardId!: number;
  @Input() colorObject: any;
  @Input() progress!: TaskProgress;

  constructor(private store: Store, private http: HttpService) { }
  ngOnInit(): void {
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    const taskId = Number(event.dataTransfer?.getData('taskId'))
    this.store.dispatch(changeProgress({taskId: taskId, changeTo: this.progress}))
    this.editTask(taskId, {progress: this.progress})
  }

  editTask(taskId: number, data: {progress: number}) {
    this.http.sendRequest(this.getTaskUrl(taskId), data, 'PATCH').subscribe(info => console.log(info))
  }

  getTaskUrl(taskId: number) {
    return `http://localhost:3000/tasks/${taskId}`
  }
}
