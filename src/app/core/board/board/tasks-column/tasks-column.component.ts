import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../board.model";

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss']
})
export class TasksColumnComponent implements OnInit {

  @Input() bgColor: string = '#4F84FF';
  @Input() tasks: Array<Task> = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
