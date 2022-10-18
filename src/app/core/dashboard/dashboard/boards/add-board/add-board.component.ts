import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {BoardModel, RequestBoardModel} from "../../../../board/board/board.model";
import {CookieService} from "../../../../../shared/cookie/cookie.service";
import {HttpService} from "../../../../../shared/services/http/http.service";

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {

  @Input() boards!: Array<BoardModel>;

  constructor(private cookie: CookieService,
              private http: HttpService) { }
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
        console.log(info)
        this.boards.push(info.body)
        this.showAddWindow = false
      }
    )
  }
}
