import {DevTeamMemberActionTypes} from '../../actions/dev-team/dev-team.actions';
import {DevTeamState} from './dev-team.reducer';
import {devTeamMember} from '../../test-util/mock-data/dev-team-member.mocks';

const addDevTeamMemberActionSnapshot: DevTeamState = {
  ids: ['Sanyi'],
  entities: Object({ 'Sanyi': Object(devTeamMember) }),
  selectedElementId: null
};

export const snapshotMap: Map<string, DevTeamState> = new Map<string, DevTeamState>()
  .set(DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBER, addDevTeamMemberActionSnapshot);
