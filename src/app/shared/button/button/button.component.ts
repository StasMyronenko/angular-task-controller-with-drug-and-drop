import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title!: string;
  @Input() bgColor: string = '#fff'
  @Input() color: string = '#4F84FF'
  @Output() onSubmit = new EventEmitter()


  constructor() { }

  onSubmitFunction(){
    this.onSubmit.emit()
  }

  ngOnInit(): void {
  }

}
