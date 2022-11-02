import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from "../../../shared/services/http/http.service";
import {BoardModel, sortOptionsEnumerateTask, Task} from "./board.model";
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {getTaskList} from "../../../state/tasks/tasks.actions";
import {selectFilteredTasksByProcess} from "../../../state/tasks/tasks.selector";
import {debounce, timer} from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // todo add info on page after add it in db without reload
  // todo add place for archived tasks
  // todo add place for comments

  sortBy = new FormControl(sortOptionsEnumerateTask.title);
  reverse = new FormControl(false)
  search = new FormControl('');
  board!: BoardModel;
  sortOptionsEnumerate = sortOptionsEnumerateTask
  tasks: {todo: Array<Task>, in_progress: Array<Task>, done: Array<Task>} = {todo: [], in_progress: [], done: []};

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpService,
    private store: Store
  ) {}
  id: number = this.activateRoute.snapshot.params['id'];

  getBoardUrl() {
    return `http://localhost:3000/boards/${this.id}`
  }

  getTasksUrl() {
    return `http://localhost:3000/tasks?boardId=${this.board.id}`
  }


  ngOnInit(): void {
    this.http.sendRequest(this.getBoardUrl(), {}, 'GET').subscribe(info => {
      this.board = info.body
      this.http.sendRequest(this.getTasksUrl(), {}, 'GET').subscribe(info => {
        this.store.dispatch(getTaskList({ tasks: info.body }))
        this.store.select(selectFilteredTasksByProcess()).subscribe(
          tasks => this.tasks = tasks
        );
      })
    })

    this.search.valueChanges.pipe(debounce(() => timer(1000))).subscribe(
      data => {
      this.store.select(selectFilteredTasksByProcess(this.search.value, Number(this.sortBy.value), this.reverse.value)).subscribe(
        tasks => this.tasks = tasks
      );
      }
    )

    this.sortBy.valueChanges.pipe(debounce(() => timer(1000))).subscribe(
      data => {
        console.log(this.sortBy.value)
      this.store.select(selectFilteredTasksByProcess(this.search.value, Number(this.sortBy.value), this.reverse.value)).subscribe(
        tasks => this.tasks = tasks
      );
      }
    )

    this.reverse.valueChanges.pipe(debounce(() => timer(1000))).subscribe(
      data => {
      this.store.select(selectFilteredTasksByProcess(this.search.value, Number(this.sortBy.value), this.reverse.value)).subscribe(
        tasks => this.tasks = tasks
      );
      }
    )
  }

}
