import { Component, OnInit, Input } from '@angular/core';
import {Task, TaskProgress} from "../board.model";

@Component({
  selector: 'app-tasks-column',
  templateUrl: './tasks-column.component.html',
  styleUrls: ['./tasks-column.component.scss']
})
export class TasksColumnComponent implements OnInit {

  @Input() bgColor: string = '#4F84FF';
  @Input() tasks: Array<Task> = [];
  @Input() title: string = '';
  @Input() boardId!: number;
  @Input() colorObject: any;
  @Input() progress!: TaskProgress;

  constructor() { }
  ngOnInit(): void {
  }


}
