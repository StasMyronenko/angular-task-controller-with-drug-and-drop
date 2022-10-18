import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import {BoardRoutingModule} from "./board-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {ValidateFormModule} from "../../shared/validate-form/validate-form.module";
import { TasksColumnComponent } from './board/tasks-column/tasks-column.component';
import { TasksColumnPopupComponent } from './board/tasks-column-popup/tasks-column-popup.component';
import {EllipsisButtonModule} from "../../shared/ellipsis-button/ellipsis-button.module";
import {XmarkModule} from "../../shared/xmark/xmark.module";
import { AddTaskComponent } from './board/add-task/add-task.component';
import {FormModule} from "../../shared/form/form.module";
import { TaskComponent } from './board/task/task.component';
import {ButtonModule} from "../../shared/button/button.module";
import { CommentComponent } from './board/comment/comment.component';


@NgModule({
  declarations: [
    BoardComponent,
    TasksColumnComponent,
    TasksColumnPopupComponent,
    AddTaskComponent,
    TaskComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TitleModule,
    ValidateFormModule,
    EllipsisButtonModule,
    XmarkModule,
    FormModule,
    ButtonModule
  ]
})
export class BoardModule { }
