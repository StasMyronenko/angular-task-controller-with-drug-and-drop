import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {TitleModule} from "../../shared/title/title.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "../../shared/services/http/http.service";

// reactive forms

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TitleModule,
    ReactiveFormsModule
  ],
  providers: [HttpService]
})
export class DashboardModule { }
