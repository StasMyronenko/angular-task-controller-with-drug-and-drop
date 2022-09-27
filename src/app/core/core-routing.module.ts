import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//34.02 main 12.64 runtime
const routes: Routes = [
  {path: 'workspace', loadChildren: () => import('./workspace/workspace.module').then(m =>m.WorkspaceModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
