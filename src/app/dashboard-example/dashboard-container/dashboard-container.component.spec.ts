import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {DashboardContainerComponent} from './dashboard-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  selectAllDevTeamMembers,
  selectDevTeamBackendAverage,
  selectDevTeamFrontendAverage,
  selectDevTeamTeamworkAverage
} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {MatMenuModule} from '@angular/material';
import {Store, StoreModule} from '@ngrx/store';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DevTeamState} from '../ngrx-feature-core/reducers/dev-team/dev-team.reducer';

describe('DashboardContainerComponent', () => {
  let container: DashboardContainerComponent;
  let store: Store<DevTeamState>;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatMenuModule, StoreModule],
      declarations: [DashboardContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DashboardContainerComponent);
    container = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  }));

  it('should initialize via store selectors', () => {
    expect(store.select).toHaveBeenCalledWith(selectAllDevTeamMembers);
    expect(store.select).toHaveBeenCalledWith(selectDevTeamFrontendAverage);
    expect(store.select).toHaveBeenCalledWith(selectDevTeamBackendAverage);
    expect(store.select).toHaveBeenCalledWith(selectDevTeamTeamworkAverage);
    expect(store.select).toHaveBeenCalledTimes(4);
  });
});
