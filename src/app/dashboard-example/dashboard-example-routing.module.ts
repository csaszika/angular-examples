import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardContainerComponent} from './dashboard-container/dashboard-container.component';
import {DevTeamMembersResolver} from './resolvers/dev-team-members.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    resolve: { developers: DevTeamMembersResolver },
    data: {state: 'ngrx-entity-dashboard-example'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardExampleRoutingModule { }
