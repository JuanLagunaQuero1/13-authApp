import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardLayoutComponent } from './layouts/dahsboard-layout/dahsboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DahsboardLayoutComponent,
    // children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
