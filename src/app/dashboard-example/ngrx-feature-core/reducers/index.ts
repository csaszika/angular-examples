import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as devTeam from './dev-team/dev-team.reducer';

export interface DashboardFeatureState {
  devTeam: devTeam.DevTeamState;
}

export const initialState: DashboardFeatureState = {
  devTeam: devTeam.initialState
};

export const reducers: ActionReducerMap<DashboardFeatureState> = {
  devTeam: devTeam.reducer
};

export const DASHBOARD_FEATURE_STATE = 'dashboard-feature';

export const selectDashboardFeatureState = createFeatureSelector<DashboardFeatureState>(DASHBOARD_FEATURE_STATE);

export const selectDevTeamState = createSelector(selectDashboardFeatureState,
  (state: DashboardFeatureState) => state.devTeam);
