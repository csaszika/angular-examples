import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxDashboardRoutingModule } from './ngrx-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgrxDashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [DashboardComponent]
})
export class NgrxDashboardModule { }
