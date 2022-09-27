import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {WorkspaceRoutingModule} from "./workspace-routing";



@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
