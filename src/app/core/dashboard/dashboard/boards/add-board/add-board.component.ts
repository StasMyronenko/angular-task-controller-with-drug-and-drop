import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {BoardModel, RequestBoardModel} from "../../../../board/board/board.model";
import {CookieService} from "../../../../../shared/cookie/cookie.service";
import {HttpService} from "../../../../../shared/services/http/http.service";
import {Store} from "@ngrx/store";
import {addBoard} from "../../../../../state/boards/boards.actions";

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {
  constructor(private cookie: CookieService,
              private http: HttpService,
              private store: Store) { }
  postBoardUrl = "http://localhost:3000/boards"
  showAddWindow = false;
  ngOnInit(): void {}

  sendData(data: any) {
    const req: RequestBoardModel = {
      title: data.title,
      description: data.description,
      columns_color: {
          todo_color: '#4F84FF',
          in_progress_color: '#4F84FF',
          done_color: '#4F84FF',
      },
      creation_date: new Date().toString(),
      userId: this.cookie.getCookie("userId")
    }
    this.http.sendRequest(this.postBoardUrl, req, 'POST').subscribe(
      info=>{
        // https://www.google.com/search?q=how+to+dispatch+data+from+request+angular&oq=how+to+dispatch+data+from+request+angular&aqs=chrome..69i57.10746j0j7&sourceid=chrome&ie=UTF-8
        // todo in store we give undefined and i don't know why
        console.log(info.body)
        this.store.dispatch(addBoard(info.body))
        this.showAddWindow = false
      }
    )
  }
}
