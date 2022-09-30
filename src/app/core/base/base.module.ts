import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MenuModule} from "../../shared/menu/menu.module";
import { HeaderDirective } from './header/header.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderDirective
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class BaseModule { }
