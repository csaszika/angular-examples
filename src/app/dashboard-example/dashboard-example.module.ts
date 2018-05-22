import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardExampleRoutingModule} from './dashboard-example-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule} from '@angular/material';
import {DASHBOARD_FEATURE_STATE, reducers} from './ngrx-feature-core/reducers';
import {StoreModule} from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    DashboardExampleRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forFeature(DASHBOARD_FEATURE_STATE, reducers)
    // EffectsModule.forFeature([UserEffects])
  ],
  declarations: [DashboardComponent]
})
export class DashboardExampleModule { }
