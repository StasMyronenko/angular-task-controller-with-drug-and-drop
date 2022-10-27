import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../../../../shared/services/http/http.service";

@Component({
  selector: 'app-tasks-column-popup',
  templateUrl: './tasks-column-popup.component.html',
  styleUrls: ['./tasks-column-popup.component.scss']
})
export class TasksColumnPopupComponent implements OnInit {
  @Input() boardId!: number;
  @Input() title!: string;
  @Input() colorObject: string = '';

  getUrl() {
    return 'http://localhost:3000/boards/' + this.boardId.toString()
  }
  showAllInfo: boolean = false
  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  submitForm(e: Event) {
    e.preventDefault()
    // @ts-ignore
    const color = e.target[0].value

    this.http.sendRequest(this.getUrl(), {}, 'GET').subscribe(info => {
      const data = info.body.columns_color
      data[this.colorObject] = color
      console.log({columns_color: data})
      this.http.sendRequest(this.getUrl(), {columns_color: data}, 'PATCH').subscribe(info => console.log(info))
    })
  }
}
