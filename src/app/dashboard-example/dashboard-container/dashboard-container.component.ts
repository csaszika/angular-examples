import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team';
import {dashboardItemsAnim} from '../../app-main/animations/list.animations';
import {Observable} from 'rxjs';
import {
  selectAllDevTeamMembers,
  selectDevTeamBackendAverage,
  selectDevTeamFrontendAverage,
  selectDevTeamTeamworkAverage
} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {AddDevTeamMember} from '../ngrx-feature-core/actions/dev-team/dev-team';
import {FormGroup} from '@angular/forms';
import {DevTeamMember} from '../types/dev-team';

@Component({
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  animations: [dashboardItemsAnim]
})
export class DashboardContainerComponent {

  devTeamMembers$: Observable<DevTeamMember[]>;
  devTeamFrontendAverage$: Observable<number>;
  devTeamBackendAverage$: Observable<number>;
  devTeamTeamworkAverage$: Observable<number>;

  cards = [
    {title: 'Dev Team member', cols: 1, rows: 1},
    {title: 'Dev Team members', cols: 1, rows: 3},
    {title: 'Dev Graph', cols: 1, rows: 2}
  ];

  constructor(private store: Store<DevTeamState>) {
    this.devTeamMembers$ = this.store.select(selectAllDevTeamMembers);
    this.devTeamFrontendAverage$ = store.select(selectDevTeamFrontendAverage);
    this.devTeamBackendAverage$ = store.select(selectDevTeamBackendAverage);
    this.devTeamTeamworkAverage$ = store.select(selectDevTeamTeamworkAverage);
  }

  onSubmitForm(devFormGroup: FormGroup): void {
    this.store.dispatch(new AddDevTeamMember({
      devTeamMember: {
        name: devFormGroup.controls.name.value,
        frontend: devFormGroup.controls.frontend.value,
        backend: devFormGroup.controls.backend.value,
        teamwork: devFormGroup.controls.teamwork.value
      }
    }));
  }


  onAnimStart() {
    console.log('start');
  }
}
