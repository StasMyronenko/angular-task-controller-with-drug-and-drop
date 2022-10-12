import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpService} from "../../../../shared/services/http/http.service";
import {debounce, Observable, timer} from "rxjs";
import {queryParametersModel} from "./boards.model";
import {BoardModel, TaskProgress} from "../../../board/board/board.model";

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
    this.boardRequest(true)
    for (let field in this.queryData) {
      // @ts-ignore
      this.queryData[field].valueChanges
      .pipe(debounce(() => timer(1000)))
      .subscribe((value: string | null) => {
        this.boardRequest(true)
        this.ref.detectChanges();
      })
      }
  }

  boardRequest(validateDate=false) {
    let url = this.boardsUrl;
    this.http.sendRequest(url, {}, 'GET').subscribe(info=> {
      let res: Array<BoardModel>;
      if(validateDate) {
        res = this.changeData([...info.body])
      } else {
        res = [...info.body]
      }
      this.boards = res
    })
  }

  changeData(data: Array<BoardModel>) {
    const sortBy: string= this.queryData.sortBy.value;
    const search = this.queryData.search.value;
    const reverse = this.queryData.reverse.value;

    if (search !== '') {
      data = data.filter((element) => {
        if (element.title.includes(search)) {
          return true
        }
        for (const task of element.tasks) {
          if (task.title.includes(search)) {
            return true
          }
        }
        return false
      })
    }

    if (sortBy === 'title' || sortBy === 'creation_date') {
      data.sort((element, next_element) => {
        return element[sortBy] > next_element[sortBy] ? 1 : -1
      })
    } else if (sortBy === 'count_todo') {
      // data.sort((element, next_element) => {
      //   element.tasks.reduce((task) => {
      //     if (task.progress === 'todo') {
      //       return 1
      //     }
      //     return 0
      //   }, 0)
      // })
    }
    console.log(sortBy)
    return reverse ? data.reverse() : data
  }
}
