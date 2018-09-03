import {AddDevTeamMember} from '../../actions/dev-team/dev-team.actions';
import {devTeamMember} from '../../test-util/mock-data/dev-team-member.mocks';
import {initialState, reducer} from './dev-team.reducer';
import {snapshotMap} from './dev-team.snapshots';

describe('DevTeam reducer', () => {


  const initAction = { type: '@@init'};

  it('should add a dev team member to store', () => {
    const addTeamMemberAction = new AddDevTeamMember(devTeamMember);

    const state = [initAction, addTeamMemberAction].reduce(reducer, initialState);

    expect(state).toEqual(snapshotMap.get(addTeamMemberAction.type));
  });

});
