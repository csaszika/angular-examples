import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardContainerComponent} from './dashboard/dashboard-container.component';

const routes: Routes = [
  {path: '', component: DashboardContainerComponent, data: {state: 'dashboard-example'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardExampleRoutingModule { }
