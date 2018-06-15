import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardContainerComponent} from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  {path: '', component: DashboardContainerComponent, data: {state: 'ngrx-entity-dashboard-example'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardExampleRoutingModule { }
