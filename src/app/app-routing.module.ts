import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardGuard} from "./features/dashboard/dashboard.guard";


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', loadChildren: () => import('./features/about/about.module').then(m=>m.AboutModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m=>m.DashboardModule),
    canLoad: [DashboardGuard]
  },
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m=>m.LoginModule)},
  {path: 'register', loadChildren: () => import('./features/register/register.module').then(m=>m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
