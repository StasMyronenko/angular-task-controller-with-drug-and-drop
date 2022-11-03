import { Component, OnInit, Input } from '@angular/core';
import {Comment, RequestComment, Task, TaskProgress} from "../board.model";
import {HttpService} from "../../../../shared/services/http/http.service";
import {CookieService} from "../../../../shared/cookie/cookie.service";
import {Store} from "@ngrx/store";
import {editTask, removeTask} from "../../../../state/tasks/tasks.actions";
import {selectAllComments, selectCountComments} from "../../../../state/comments/comments.selector";
import {addComment, getCommentList} from "../../../../state/comments/comments.actions";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() archived: boolean = false;
  comments$ = this.store.select(selectAllComments);
  countComments$ = this.store.select(selectCountComments);
  showTaskSettings = false

  constructor(private http: HttpService, private cookie: CookieService, private store: Store) { }

  ngOnInit(): void {
    this.http.sendRequest(this.getCommentsUrl(true), {}, 'GET').subscribe(info => {
      this.store.dispatch(getCommentList({comments: info.body}))
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
    this.http.sendRequest(this.getTaskUrl(), {}, 'DELETE').subscribe(info => {
        this.store.dispatch(removeTask({taskId: this.task.id}));
      }
    )
    this.showTaskSettings = false
  }

  archiveTask() {
    this.http.sendRequest(this.getTaskUrl(), {archived: !this.archived}, 'PATCH').subscribe(info => {
      this.store.dispatch(editTask({newData: info.body}))
    })
    this.showTaskSettings = false
  }

  addComment(data: {title_comment: string, comment: string}) {
    const res: RequestComment = {
      taskId: this.task.id,
      name: this.cookie.getCookie('user'),
      title: data.title_comment,
      comment: data.comment,
      creation_date: new Date().toString()
    }
    this.http.sendRequest(this.getCommentsUrl(), res, 'POST').subscribe(
      info => this.store.dispatch(
        addComment({comment: info.body})
      )
    )
  }

  drag(event: DragEvent) {
   event.dataTransfer?.setData('taskId', this.task.id.toString())
  }
}
