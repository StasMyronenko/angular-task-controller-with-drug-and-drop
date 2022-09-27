import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PyramidComponent } from './pyramid/pyramid.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PyramidComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PyramidComponent,
    MenuComponent
  ]
})
export class SharedModule { }
