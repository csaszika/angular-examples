import {devTeamMember, devTeamMember2} from '../../test-util/mock-data/dev-team-member.mocks';
import {selectDevTeamFrontendAverage} from './selectors';

describe('selectDevTeamFrontendAverage', () => {

  it('should select', () => {
    const state = {
      ids: ['Sanyi', 'Sanyi2'],
      entities: Object({ 'Sanyi': Object(devTeamMember), 'Sanyi2': Object(devTeamMember2)}),
      selectedElementId: null
    };

    expect(selectDevTeamFrontendAverage.projector(state, [devTeamMember, devTeamMember2])).toBe((devTeamMember.frontend + devTeamMember2.frontend) / 2);
  });
});
