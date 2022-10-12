import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from "../../../shared/services/http/http.service";
import {BoardModel} from "./board.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // todo make this whole component
  board: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpService
  ) {
     this.http.sendRequest(this.url, {}, 'GET').subscribe(info => {
      this.board = info.body
    })
  }
  id: number = this.activateRoute.snapshot.params['id'];
  url = `http://localhost:3000/boards/${this.id}`

  ngOnInit(): void {}

}
