import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {PyramidModule} from "../pyramid/pyramid.module";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PyramidModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
