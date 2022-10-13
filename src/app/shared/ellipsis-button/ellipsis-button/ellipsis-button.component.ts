import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ellipsis-button',
  templateUrl: './ellipsis-button.component.html',
  styleUrls: ['./ellipsis-button.component.scss']
})
export class EllipsisButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter()

  constructor() { }

  onClickFunction() {
    this.onClick.emit()
  }

  ngOnInit(): void {
  }

}
