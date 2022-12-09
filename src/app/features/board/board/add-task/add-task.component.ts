import {Component, Input} from '@angular/core';
import {RequestTask, TaskProgress} from "../board.model";
import {HttpService} from "../../../../core/services/http/http.service";
import {Store} from "@ngrx/store";
import {addTask} from "../../../../state/tasks/tasks.actions";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Input() boardId!: number;
  @Input() progress!: TaskProgress;

  showAddTaskPopUp = false;
  constructor(private http: HttpService, private store: Store) { }

  getTasksUrl() {
    return `http://localhost:3000/tasks`
  }

  addTaskRequest(data: {title: string, description: string}) {
    const res: RequestTask = {
      boardId: this.boardId,
      title: data.title,
      description: data.description,
      creation_date: (new Date(Date.now())).toString(),
      progress: this.progress,
      archived: false
    }
    this.http.sendRequest(this.getTasksUrl(), res, 'POST').subscribe(info => {
      this.store.dispatch(addTask({task: info.body}))
    });

    this.showAddTaskPopUp = false;
  }
}
