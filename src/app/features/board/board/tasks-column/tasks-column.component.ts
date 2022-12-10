import { Component, Input } from '@angular/core';
import {TaskProgress} from "../board.model";
import {Store} from "@ngrx/store";
import {changeProgress} from "../../../../state/tasks/tasks.actions";
import {HttpService} from "../../../../core/services/http/http.service";

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss']
})
export class TasksColumnComponent {

  @Input() bgColor: string = '#4F84FF';
  @Input() tasks: any = [];
  @Input() title: string = '';
  @Input() boardId!: number;
  @Input() colorObject!: string;
  @Input() progress!: TaskProgress;

  constructor(private store: Store, private http: HttpService) { }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    const taskId = Number(event.dataTransfer?.getData('taskId'))
    this.editTask(taskId, {progress: this.progress})
    this.store.dispatch(changeProgress({taskId: taskId, changeTo: this.progress}))
  }

  editTask(taskId: number, data: {progress: number}) {
    this.http.sendRequest(this.getTaskUrl(taskId), data, 'PATCH').subscribe(info => {})
  }

  getTaskUrl(taskId: number) {
    return `http://localhost:3000/tasks/${taskId}`
  }
}
