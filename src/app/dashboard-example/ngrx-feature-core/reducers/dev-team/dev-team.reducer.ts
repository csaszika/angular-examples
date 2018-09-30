import {DevTeamMember} from '../../../types/dev-team';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {DevTeamMemberActionTypes, DevTeamMemberActions} from '../../actions/dev-team/dev-team.actions';

export interface DevTeamState extends EntityState<DevTeamMember> {
  selectedElementId: number | null;
}

export const adapter: EntityAdapter<DevTeamMember> = createEntityAdapter<DevTeamMember>({
  selectId: (element: DevTeamMember) => element.name,
  sortComparer: sortByName
});

function sortByName(ob1: DevTeamMember, ob2: DevTeamMember): number {
  return ob1.name.localeCompare(ob2.name);
}

export const initialState: DevTeamState = adapter.getInitialState({
  selectedElementId: null
});

export function reducer(state = initialState, action: DevTeamMemberActions): DevTeamState {
  switch (action.type) {
    case DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBER: {
      return adapter.addOne(action.payload, state);
    }

    case DevTeamMemberActionTypes.UPSERT_DEV_TEAM_MEMBER: {
      return adapter.upsertOne(action.payload, state);
    }

    case DevTeamMemberActionTypes.UPSERT_DEV_TEAM_MEMBERS: {
      return adapter.upsertMany(action.payload, state);
    }

    case DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBERS: {
      return adapter.addMany(action.payload, state);
    }

    case DevTeamMemberActionTypes.UPDATE_DEV_TEAM_MEMBER: {
      return adapter.updateOne(action.payload, state);
    }

    case DevTeamMemberActionTypes.UPDATE_DEV_TEAM_MEMBERS: {
      return adapter.updateMany(action.payload, state);
    }

    case DevTeamMemberActionTypes.DELETE_DEV_TEAM_MEMBER: {
      return adapter.removeOne(action.payload, state);
    }

    case DevTeamMemberActionTypes.DELETE_DEV_TEAM_MEMBERS: {
      return adapter.removeMany(action.payload, state);
    }

    case DevTeamMemberActionTypes.LOAD_DEV_TEAM_MEMBERS: {
      return adapter.addAll(action.payload, state);
    }

    case DevTeamMemberActionTypes.CLEAR_DEV_TEAM_MEMBERS: {
      return adapter.removeAll({ ...state, selectedElementId: null });
    }

    default: {
      return state;
    }
  }
}

// export const selectSelectedDevTeamMemberId = (state: DevTeamState) => state.selectedElementId;

export const {
  // select the array of user ids
  selectIds: selectDevTeamMemberIds,

  // select the dictionary of user entities -> map<id, object> -> id is defined by adapter selectId attribute
  selectEntities: selectDevTeamMemberEntities,

  // select the array of users -> real array
  selectAll: selectAllDevTeamMembers,

  // select the total user count
  selectTotal: selectDevTeamMemberTotal,
} = adapter.getSelectors();
