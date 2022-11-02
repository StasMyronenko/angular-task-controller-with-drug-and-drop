import { Component, OnInit, Input } from '@angular/core';
import {Comment, RequestComment, Task, TaskProgress} from "../board.model";
import {HttpService} from "../../../../shared/services/http/http.service";
import {CookieService} from "../../../../shared/cookie/cookie.service";
import {Store} from "@ngrx/store";
import {editTask} from "../../../../state/tasks/tasks.actions";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() boardId!: number;
  comments!: Array<Comment>;
  showTaskSettings = false

  constructor(private http: HttpService, private cookie: CookieService, private store: Store) { }

  ngOnInit(): void {
    this.http.sendRequest(this.getCommentsUrl(true), {}, 'GET').subscribe(info => {
      this.comments = info.body
    })
  }

  getTaskUrl() {
    return `http://localhost:3000/tasks/${this.task.id}`
  }

  getCommentsUrl(sortedByDate: boolean = false) {
    return `http://localhost:3000/comments${sortedByDate ? '?_sort=creation_date' : ''}`
  }

  editTask(data: {title: string, description: string}) {
    this.http.sendRequest(this.getTaskUrl(), data, 'PATCH').subscribe(
      info => this.store.dispatch(editTask({newData: info.body}))
    )
  }

  deleteTask() {
    this.http.sendRequest(this.getTaskUrl(), {}, 'DELETE').subscribe(info => console.log(info))
  }

  archiveTask() {
    this.http.sendRequest(this.getTaskUrl(), {archived: true}, 'PATCH').subscribe(info => console.log(info))
  }

  addComment(data: {title_comment: string, comment: string}) {
    const res: RequestComment = {
      taskId: this.task.id,
      name: this.cookie.getCookie('user'),
      title: data.title_comment,
      comment: data.comment,
      creation_date: new Date().toString()
    }
    this.http.sendRequest(this.getCommentsUrl(), res, 'POST').subscribe(info => this.comments.push(info.body))
  }

  drag(event: DragEvent) {
   event.dataTransfer?.setData('taskId', this.task.id.toString())
  }
}
