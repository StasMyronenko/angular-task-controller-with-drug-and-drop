import {Component} from '@angular/core';
import {RequestBoardModel} from "../../../board/board/board.model";
import {CookieService} from "../../../../core/services/cookie/cookie.service";
import {HttpService} from "../../../../core/services/http/http.service";
import {Store} from "@ngrx/store";
import {addBoard} from "../../../../state/boards/boards.actions";

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent {
    postBoardUrl = "http://localhost:3000/boards"
  showAddWindow = false;

  constructor(
    private cookie: CookieService,
    private http: HttpService,
    private store: Store
  ) { }

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
      userId: +this.cookie.getCookie("userId")
    }
    this.http.sendRequest(this.postBoardUrl, req, 'POST').subscribe(
      async (info)=>{
        this.store.dispatch(addBoard({board: info.body}))
        this.showAddWindow = false
      }
    )
  }
}
