import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectBoards} from "../../../state/boards/boards.selector";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  boards$ = this.store.select(selectBoards)
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
