import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import {PyramidModule} from "../../shared/pyramid/pyramid.module";
import {TitleModule} from "../../shared/title/title.module";
import { AboutProjectComponent } from './about/about-project/about-project.component';
import { AboutProjectElementComponent } from './about/about-project/about-project-element/about-project-element.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutHeaderComponent,
    AboutProjectComponent,
    AboutProjectElementComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PyramidModule,
    TitleModule
  ]
})
export class AboutModule { }
