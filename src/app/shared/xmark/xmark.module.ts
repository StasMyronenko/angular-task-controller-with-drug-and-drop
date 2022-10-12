import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmarkComponent } from './xmark/xmark.component';



@NgModule({
  declarations: [
    XmarkComponent
  ],
  exports: [
    XmarkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class XmarkModule { }
