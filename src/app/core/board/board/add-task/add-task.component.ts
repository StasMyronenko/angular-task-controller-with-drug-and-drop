import {Component, EventEmitter, OnInit, Input} from '@angular/core';
import {RequestTask, TaskProgress} from "../board.model";
import {HttpService} from "../../../../shared/services/http/http.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() boardId!: number;
  @Input() progress!: TaskProgress;

  showAddTaskPopUp = false;
  constructor(private http: HttpService) { }

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
    this.http.sendRequest(this.getTasksUrl(), res, 'POST').subscribe(info => console.log(info))
  }



  ngOnInit(): void {
  }

}
