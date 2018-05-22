import {createSelector} from '@ngrx/store';
import {selectDevTeamState} from '../index';
import * as dashboard from './dev-team';

export const selectDevTeamMemberIds = createSelector(
  selectDevTeamState,
  dashboard.selectDevTeamMemberIds
);

export const selectDevTeamMemberEntities = createSelector(
  selectDevTeamState,
  dashboard.selectDevTeamMemberEntities
);

export const selectAllDevTeamMembers = createSelector(
  selectDevTeamState,
  dashboard.selectAllDevTeamMembers
);

export const selectDevTeamMemberTotal = createSelector(
  selectDevTeamState,
  dashboard.selectDevTeamMemberTotal
);

// export const selectCurrentDevTeamMemberId = createSelector(
//   selectDevTeamState,
//   dashboard.selectSelectedDevTeamMemberId
// );
//
// export const selectCurrentDevTeamMember = createSelector(
//   selectDevTeamMemberEntities,
//   selectCurrentDevTeamMemberId,
//   (entities, dashboardElementId) => entities[dashboardElementId]
// );
