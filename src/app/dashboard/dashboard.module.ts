import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DahsboardLayoutComponent } from './layouts/dahsboard-layout/dahsboard-layout.component';


@NgModule({
  declarations: [
    DahsboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
