import {Component, Input} from '@angular/core';
// TODO animations

@Component({
  selector: 'app-about-project-element',
  templateUrl: './about-project-element.component.html',
  styleUrls: ['./about-project-element.component.scss']
})
export class AboutProjectElementComponent {
  @Input() text: string = 'some text';
  @Input() textWidth: number = 600;
  @Input() icon: any = '';
  @Input() reverse: boolean = false;
  @Input() iconSize: number = 10;

  constructor() { }
}
