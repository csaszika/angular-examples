import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardExampleRoutingModule} from './dashboard-example-routing.module';
import {DashboardContainerComponent} from './dashboard/dashboard-container.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {DASHBOARD_FEATURE_STATE, reducers} from './ngrx-feature-core/reducers';
import {StoreModule} from '@ngrx/store';
import {DevGraphComponent} from './dev-graph/dev-graph.component';
import {DevTeamFormComponent} from './dev-team-form/dev-team-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardExampleRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature(DASHBOARD_FEATURE_STATE, reducers)
    // EffectsModule.forFeature([])
  ],
  declarations: [
    DashboardContainerComponent,
    DevTeamFormComponent,
    DevGraphComponent
  ]
})
export class DashboardExampleModule { }
