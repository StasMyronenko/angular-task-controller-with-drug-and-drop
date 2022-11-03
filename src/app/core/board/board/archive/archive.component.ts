import { Component, OnInit, Input } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectArchivedTasks} from "../../../../state/tasks/tasks.selector";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  tasks$ = this.store.select(selectArchivedTasks)
  showAllInfo = false

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
