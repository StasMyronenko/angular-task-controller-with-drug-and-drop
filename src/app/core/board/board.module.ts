import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {BoardRoutingModule} from "./board-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {ValidateFormModule} from "../../shared/validate-form/validate-form.module";
import { TasksColumnComponent } from './board/tasks-column/tasks-column.component';


@NgModule({
  declarations: [
    BoardComponent,
    TasksColumnComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TitleModule,
    ValidateFormModule
  ]
})
export class BoardModule { }
