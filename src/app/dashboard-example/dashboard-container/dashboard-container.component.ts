import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team.reducer';
import {dashboardItemsAnim} from '../../../shared/animations/list.animations';
import {fromEvent, Observable} from 'rxjs';
import {
  selectAllDevTeamMembers,
  selectDevTeamBackendAverage,
  selectDevTeamFrontendAverage,
  selectDevTeamTeamworkAverage
} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {AddDevTeamMember} from '../ngrx-feature-core/actions/dev-team/dev-team.actions';
import {FormGroup} from '@angular/forms';
import {DevTeamMember} from '../types/dev-team';
import {DevTeamFormComponent} from '../dev-team-form/dev-team-form.component';
import {tap} from 'rxjs/operators';

@Component({
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  animations: [dashboardItemsAnim]
})
export class DashboardContainerComponent implements AfterViewInit {

  @ViewChild(DevTeamFormComponent) form: ElementRef;

  submitForm$: Observable<Event>;

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
    this.devTeamMembers$ = store.select(selectAllDevTeamMembers);
    this.devTeamFrontendAverage$ = store.select(selectDevTeamFrontendAverage);
    this.devTeamBackendAverage$ = store.select(selectDevTeamBackendAverage);
    this.devTeamTeamworkAverage$ = store.select(selectDevTeamTeamworkAverage);
  }

  ngAfterViewInit(): void {
    // this.submitForm$ = fromEvent(this.form.nativeElement, 'submit');
    //
    // this.submitForm$.pipe(
    //   tap(() => console.log('fromevent'))
    // );
  }

  onSubmitForm(devFormGroup: FormGroup): void {
    this.store.dispatch(new AddDevTeamMember({
      name: devFormGroup.controls.name.value,
      frontend: devFormGroup.controls.frontend.value,
      backend: devFormGroup.controls.backend.value,
      teamwork: devFormGroup.controls.teamwork.value
    }));
  }

  onAnimStart() {
    console.log('animation start');
  }

  onAnimEnded() {
    console.log('animation ended');
  }
}
