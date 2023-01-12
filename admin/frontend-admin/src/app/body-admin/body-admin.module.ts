import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyAdminRoutingModule } from './body-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BodyAdminRoutingModule
  ]
})
export class BodyAdminModule { }
