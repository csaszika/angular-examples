import {createSelector} from '@ngrx/store';
import {selectDevTeamState} from '../index';
import * as dashboard from './dev-team.reducer';
import {DevTeamState} from './dev-team.reducer';
import {DevTeamMember} from '../../../types/dev-team';

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

export const selectDevTeamFrontendAverage = createSelector(
  selectDevTeamState,
  selectAllDevTeamMembers,
  (state: DevTeamState, members: DevTeamMember[]) => {
    const acc: number[] = [];
    for (const member of members) {
      acc.push(+member.frontend);
    }
    return acc.reduce((accumulator, curr) => accumulator + curr, 0) / acc.length;
  }
);

export const selectDevTeamBackendAverage = createSelector(
  selectDevTeamState,
  selectAllDevTeamMembers,
  (state: DevTeamState, members: DevTeamMember[]) => {
    const acc: number[] = [];
    for (const member of members) {
      acc.push(+member.backend);
    }
    return acc.reduce((accumulator, curr) => accumulator + curr, 0) / acc.length;
  }
);

export const selectDevTeamTeamworkAverage = createSelector(
  selectDevTeamState,
  selectAllDevTeamMembers,
  (state: DevTeamState, members: DevTeamMember[]) => {
    const acc: number[] = [];
    for (const member of members) {
      acc.push(+member.teamwork);
    }
    return acc.reduce((accumulator, curr) => accumulator + curr, 0) / acc.length;
  }
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
