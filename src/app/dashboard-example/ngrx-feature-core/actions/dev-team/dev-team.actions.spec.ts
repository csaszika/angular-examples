import {DevTeamMember} from '../../../types/dev-team';
import {AddDevTeamMember, DevTeamMemberActionTypes} from './dev-team.actions';

describe('AddDevTeamMember', () => {

  it('should create action', () => {
    const payload: DevTeamMember = { name: 'Sanyi', backend: 2, frontend: 3, teamwork: 4};

    const action = new AddDevTeamMember(payload);

    expect(action.type).toEqual(DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBER);
    expect(action.payload).toEqual(payload);
  });
});
