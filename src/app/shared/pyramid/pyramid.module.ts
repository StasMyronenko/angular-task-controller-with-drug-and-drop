import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PyramidComponent} from "./pyramid/pyramid.component";



@NgModule({
  declarations: [PyramidComponent],
  imports: [
    CommonModule
  ],
  exports: [PyramidComponent]
})
export class PyramidModule { }
