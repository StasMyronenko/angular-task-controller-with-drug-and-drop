import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseModule} from "./core/base/base.module";
import {HttpClientModule} from "@angular/common/http";
import {BoardModule} from "./core/board/board.module";

// TODO data type(delete `any` i many places)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    HttpClientModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

