import { Component, OnInit } from '@angular/core';
import {HttpService} from "./shared/services/http/http.service";
import {Store} from "@ngrx/store";
import {selectBoards} from "./state/boards/boards.selector";
import {getBoardList} from "./state/boards/boards.actions";
import {HttpResponse} from "@angular/common/http";
import {BoardModel} from "./core/board/board/board.model";
import {CookieService} from "./shared/cookie/cookie.service";
import {getTaskList} from "./state/tasks/tasks.actions";
import {getCommentList} from "./state/comments/comments.actions";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task_controll';
  // boards$ = this.store.select(selectBoards)
  constructor(private http: HttpService,
              private cookie: CookieService,
              // private store: Store
  ) {
  }

  // getUrl(table='boards') {
  //   const userId = this.cookie.getCookie('userId')
  //   const baseUrl = `http://localhost:3000/${table}`
  //   return `${baseUrl}?userId=${userId}`
  // }

  ngOnInit() {
    // this.http.sendRequest(this.getUrl('boards'), {}, 'GET')
    //   .subscribe((info:HttpResponse<ReadonlyArray<BoardModel> | any>) => {
    //     return this.store.dispatch(getBoardList({ boards: info?.body || [] }))
    //   })
    // this.http.sendRequest(this.getUrl('tasks'), {}, 'GET')
    //   .subscribe(
    //     (info:HttpResponse<ReadonlyArray<BoardModel> | any>) => this.store.dispatch(
    //       getTaskList( { tasks: info?.body || [] })
    //     )
    //   )
    // this.boards$.subscribe(board => {
    //   console.log(board)
    // })
    // this.http.sendRequest(this.getUrl('comments'), {}, 'GET')
    //   .subscribe(
    //     (info:HttpResponse<ReadonlyArray<BoardModel> | any>) => this.store.dispatch(
    //       getCommentList({ comments: info?.body || []})
    //     )
    //   )
  }
}
