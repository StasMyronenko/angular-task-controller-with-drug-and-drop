import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from "../../../shared/services/http/http.service";
import {BoardModel, Task, TaskProgress} from "./board.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // todo setting and task settings
  // todo add info on page after add it in db without reload
  // todo add place for archived tasks
  // todo add place for comments

  sortBy = new FormControl('title');
  reverse = new FormControl(false)
  search = new FormControl('');
  board!: BoardModel;
  tasks: {todo: Array<Task>, in_progress: Array<Task>, done: Array<Task>} = {todo: [], in_progress: [], done: []};

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpService
  ) {

  }
  id: number = this.activateRoute.snapshot.params['id'];
  url = `http://localhost:3000/boards/${this.id}`

  ngOnInit(): void {
    this.http.sendRequest(this.url, {}, 'GET').subscribe(info => {
      this.board = info.body
      for (let task of this.board.tasks) {
        switch (task.progress){
          case TaskProgress.todo:
            this.tasks.todo.push(task)
            break;
          case TaskProgress.in_progress:
            this.tasks.in_progress.push(task)
            break;
          case TaskProgress.done:
            this.tasks.done.push(task)
            break;
      }
    }
    })

  }

}
