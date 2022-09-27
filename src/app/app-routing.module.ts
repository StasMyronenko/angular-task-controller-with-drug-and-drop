import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./core/workspace/about/about/about.component";


const routes: Routes = [

  {path: '', component: AboutComponent},
  {path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  {path: 'auth', loadChildren: () => import("./core/authentication/authentication.module").then(m=>m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
