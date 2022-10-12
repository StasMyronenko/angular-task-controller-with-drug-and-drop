import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {BoardRoutingModule} from "./board-routing.module";
import {TitleModule} from "../../shared/title/title.module";


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TitleModule
  ]
})
export class BoardModule { }
