import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {CookieService} from "../../../core/services/cookie/cookie.service";
import {HttpResponse} from "@angular/common/http";
import {BoardModel} from "../../board/board/board.model";
import {getBoardList} from "../../../state/boards/boards.actions";
import {getTaskList} from "../../../state/tasks/tasks.actions";
import {HttpService} from "../../../core/services/http/http.service";
import {Store} from "@ngrx/store";
import {sortOptionsEnumerateBoard} from "./dashboard.model";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  sortBy = new FormControl(sortOptionsEnumerateBoard.title);
  reverse = new FormControl(false)
  search = new FormControl('');
  sortOptionsEnumerate = sortOptionsEnumerateBoard;

  constructor(private cookie: CookieService, private http: HttpService, private store: Store) { }

  ngOnInit() {
        this.http.sendRequest(this.getUrl('boards'), {}, 'GET')
      .subscribe((info:HttpResponse<ReadonlyArray<BoardModel> | any>) => {
        return this.store.dispatch(getBoardList({ boards: info?.body || [] }))
      })
    this.http.sendRequest(this.getUrl('tasks'), {}, 'GET')
      .subscribe(
        (info:HttpResponse<ReadonlyArray<BoardModel> | any>) => this.store.dispatch(
          getTaskList( { tasks: info?.body || [] })
        )
      )
  }

  getUrl(table='boards') {
    const userId = this.cookie.getCookie('userId')
    const baseUrl = `http://localhost:3000/${table}`
    return `${baseUrl}?userId=${userId}`
  }
}
