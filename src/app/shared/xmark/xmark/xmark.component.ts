import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-xmark',
  templateUrl: './xmark.component.html',
  styleUrls: ['./xmark.component.scss']
})
export class XmarkComponent implements OnInit {
  @Input() color: string = "#FFF";
  @Output() onXmark = new EventEmitter();
  constructor() { }

  xmarkFunction() {
    this.onXmark.emit()
  }

  ngOnInit(): void {
  }

}
