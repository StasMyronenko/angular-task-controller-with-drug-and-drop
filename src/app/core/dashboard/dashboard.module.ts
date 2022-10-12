import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "../../shared/services/http/http.service";
import {CookieService} from "../../shared/cookie/cookie.service";
import { BoardsComponent } from './dashboard/boards/boards.component';
import { EllipsisButtonComponent } from './dashboard/boards/ellipsis-button/ellipsis-button.component';
import { AddBoardComponent } from './dashboard/boards/add-board/add-board.component';
import {FormModule} from "../../shared/form/form.module";
import { BoardTileComponent } from './dashboard/boards/board-tile/board-tile.component';
import {XmarkModule} from "../../shared/xmark/xmark.module";

// reactive forms

@NgModule({
  declarations: [
    DashboardComponent,
    BoardsComponent,
    EllipsisButtonComponent,
    AddBoardComponent,
    BoardTileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TitleModule,
    ReactiveFormsModule,
    FormModule,
    XmarkModule
  ],
  providers: [HttpService, CookieService]
})
export class DashboardModule { }
