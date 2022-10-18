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

  addTaskRequest(data: {title: string, description: string}) {
    const res: RequestTask = {title: data.title, description: data.description, creation_date: (new Date(Date.now())).toString(), progress: this.progress, comments: [], archived: false}
    this.http.sendRequest(this.getUrl(), {}, 'GET').subscribe(info => {
      const tasks = [...info.body.tasks, res]
      this.http.sendRequest(this.getUrl(), {tasks: tasks}, 'PATCH').subscribe(info => console.log(info))
    })

  }

  getUrl() {
    return `http://localhost:3000/boards/${this.boardId}`
  }

  ngOnInit(): void {
  }

}
