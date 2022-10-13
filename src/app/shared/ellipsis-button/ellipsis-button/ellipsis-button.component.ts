import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-ellipsis-button',
  templateUrl: './ellipsis-button.component.html',
  styleUrls: ['./ellipsis-button.component.scss']
})
export class EllipsisButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter()
  @Input() color: string = '#4F84FF';
  @Input() size: string = '2rem';
  constructor() { }

  onClickFunction() {
    this.onClick.emit()
  }

  ngOnInit(): void {
  }

}
