import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import {PyramidModule} from "../../shared/pyramid/pyramid.module";



@NgModule({
  declarations: [
    AboutComponent,
    AboutHeaderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PyramidModule
  ]
})
export class AboutModule { }
