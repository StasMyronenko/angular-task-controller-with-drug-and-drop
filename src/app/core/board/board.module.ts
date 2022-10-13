import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {BoardRoutingModule} from "./board-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {ValidateFormModule} from "../../shared/validate-form/validate-form.module";
import { TasksColumnComponent } from './board/tasks-column/tasks-column.component';
import { TasksColumnPopupComponent } from './board/tasks-column-popup/tasks-column-popup.component';
import { TaskPopupComponent } from './board/task-popup/task-popup.component';
import {EllipsisButtonModule} from "../../shared/ellipsis-button/ellipsis-button.module";
import {XmarkModule} from "../../shared/xmark/xmark.module";


@NgModule({
  declarations: [
    BoardComponent,
    TasksColumnComponent,
    TasksColumnPopupComponent,
    TaskPopupComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TitleModule,
    ValidateFormModule,
    EllipsisButtonModule,
    XmarkModule
  ]
})
export class BoardModule { }
