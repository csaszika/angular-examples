import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardExampleRoutingModule} from './dashboard-example-routing.module';
import {DashboardContainerComponent} from './dashboard-container/dashboard-container.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {DASHBOARD_FEATURE_STATE, reducers} from './ngrx-feature-core/reducers';
import {StoreModule} from '@ngrx/store';
import {DevGraphComponent} from './dev-graph/dev-graph.component';
import {DevTeamFormComponent} from './dev-team-form/dev-team-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DevTeamTableComponent} from './dev-team-table/dev-team-table.component';

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    StoreModule.forFeature(DASHBOARD_FEATURE_STATE, reducers)
    // EffectsModule.forFeature([])
  ],
  declarations: [
    DashboardContainerComponent,
    DevTeamFormComponent,
    DevGraphComponent,
    DevTeamTableComponent
  ]
})
export class DashboardExampleModule { }
