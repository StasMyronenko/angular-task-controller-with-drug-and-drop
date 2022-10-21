import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpService} from "../../../../shared/services/http/http.service";
import {debounce, Observable, timer} from "rxjs";
import {queryParametersModel} from "./boards.model";
import {BoardModel, TaskProgress, Task} from "../../../board/board/board.model";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit{
  // TODO sorting by task count
  @Input() boardsUrl: string = '';
  @Input() queryData!: queryParametersModel;
  boards: Array<BoardModel> = [];
  constructor(private http: HttpService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.boardRequest()
    for (let field in this.queryData) {
      // @ts-ignore
      this.queryData[field].valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: string | null) => {
        this.boardRequest()
        this.ref.detectChanges();
      })
      }
  }

  boardRequest() {
    let url = this.boardsUrl;
    this.http.sendRequest(url, {}, 'GET').subscribe(info=> {
      this.changeData([...info.body])
    })
  }

  changeData(data: Array<BoardModel>) {
    const sortBy: string= this.queryData.sortBy.value;
    const search = this.queryData.search.value;
    const reverse = this.queryData.reverse.value;

    const res = []





    // if (search !== '') {
    //   data = data.filter((board) => {
    //     if (board.title.includes(search)) {
    //       return true
    //     }
    //
    //     const res = this.http.sendRequest(`http://localhost:3000/tasks?boardId=${board.id}&title_like=${search}`, {}, 'GET').subscribe(info => {
    //       return info.body.length > 0
    //       // const tasks: Array<Task> = info.body
    //       // for (const task of tasks) {
    //       //
    //       //   if (task.title.includes(search)) {
    //       //     return true
    //       //   }
    //       // }
    //       // return false
    //     })
    //     console.log(res)
    //     return res
    //   })
    // }
    //
    // if (sortBy === 'title' || sortBy === 'creation_date') {
    //   data.sort((element, next_element) => {
    //     return element[sortBy] > next_element[sortBy] ? 1 : -1
    //   })
    // } else if (sortBy === 'count_todo') {
    //   // data.sort((element, next_element) => {
    //   //   element.tasks.reduce((task) => {
    //   //     if (task.progress === 'todo') {
    //   //       return 1
    //   //     }
    //   //     return 0
    //   //   }, 0)
    //   // })
    // }
    // return reverse ? data.reverse() : data
  }

  // filterData(data: Array<BoardModel>, filterString: string) {
  //   const res = data.filter((board) => {
  //     if(board.title.includes(filterString)) {
  //       return true
  //     }
  //   })
  // }
}
