import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pyramid',
  template: './pyramid.component.svg',
  styleUrls: ['./pyramid.component.scss']
})
export class PyramidComponent implements OnChanges {
  // TODO something with State or Observable mb
  @Input() size: number = 1;
  @Input() colorDown = "#4F84FF";
  @Input() colorCenter = "#b175f9";
  @Input() colorUp = "#F66CF5";

  side = 330;
  points_small = [160,175, 310, 244, 160, 315, 20, 244]
  points_big = [160,15, 315,244, 160,315, 15,244]
  x1_line = 160
  y1_line = 15
  x2_line = 161
  y2_line = 315
  strokeWirth = 10
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.side *= this.size;
    this.points_small = this.points_small.map((el) => el * this.size)
    this.points_big = this.points_big.map((el) => el * this.size)
    this.x1_line *= this.size;
    this.y1_line *= this.size;
    this.x2_line *= this.size;
    this.y2_line *= this.size
    this.strokeWirth *= this.size
  }

}
