import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseModule} from "./core/base/base.module";
import {HttpClientModule} from "@angular/common/http";
import {BoardModule} from "./features/board/board.module";
import { StoreModule } from '@ngrx/store';
import { boardsReducer } from "./state/boards/boards.reducer";
import { commentsReducer } from "./state/comments/comments.reducer";
import { tasksReducer } from "./state/tasks/tasks.reducer";
import {HttpService} from "./core/services/http/http.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({boards: boardsReducer, comments: commentsReducer, tasks: tasksReducer},{}),
    AppRoutingModule,
    BaseModule,
    HttpClientModule,
    BoardModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

