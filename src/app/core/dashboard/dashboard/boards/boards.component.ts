import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpService} from "../../../../shared/services/http/http.service";
import {debounce, timer} from "rxjs";
import {queryParametersModel} from "./boards.model";
import {BoardModel, TaskProgress, Task} from "../../../board/board/board.model";
import {Store} from "@ngrx/store";
import {selectBoards} from "../../../../state/boards/boards.selector";
import {HttpResponse} from "@angular/common/http";
import {getBoardList} from "../../../../state/boards/boards.actions";
import {CookieService} from "../../../../shared/cookie/cookie.service";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit{
  // TODO sorting by task count
  @Input() queryData!: queryParametersModel;
  boards$ = this.store.select(selectBoards)
  boards = []
  constructor(private http: HttpService, private ref: ChangeDetectorRef, private store: Store, private cookie: CookieService) {}

  getUrl(table='boards') {
    const userId = this.cookie.getCookie('userId')
    const baseUrl = `http://localhost:3000/${table}`
    return `${baseUrl}?userId=${userId}`
  }

  ngOnInit(): void {
    this.http.sendRequest(this.getUrl('boards'), {}, 'GET')
      .subscribe((info:HttpResponse<ReadonlyArray<BoardModel> | any>) => {
        return this.store.dispatch(getBoardList({ boards: info?.body || [] }))
      })
    for (let field in this.queryData) {
      // @ts-ignore
      this.queryData[field].valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: string | null) => {
        console.log(field, value)
        this.ref.detectChanges();
      })
      }
  }

}
