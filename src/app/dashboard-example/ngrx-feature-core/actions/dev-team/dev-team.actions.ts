import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {DevTeamMember} from '../../../types/dev-team';

export enum DevTeamMemberActionTypes {
  // effects actions
  GET_DEV_TEAM_MEMBERS = '[DevTeam] Get DevTeamMembers',
  // reducer actions
  LOAD_DEV_TEAM_MEMBERS = '[DevTeam] Load DevTeamMembers',
  LOAD_DEV_TEAM_MEMBERS_FAILED = '[DevTeam] Load DevTeamMembers failed',
  ADD_DEV_TEAM_MEMBER = '[DevTeam] Add DevTeamMember',
  UPSERT_DEV_TEAM_MEMBER = '[DevTeam] Upsert DevTeamMember',
  ADD_DEV_TEAM_MEMBERS = '[DevTeam] Add DevTeamMembers',
  UPSERT_DEV_TEAM_MEMBERS = '[DevTeam] Upsert DevTeamMembers',
  UPDATE_DEV_TEAM_MEMBER = '[DevTeam] Update DevTeamMember',
  UPDATE_DEV_TEAM_MEMBERS = '[DevTeam] Update DevTeamMembers',
  DELETE_DEV_TEAM_MEMBER = '[DevTeam] Delete DevTeamMember',
  DELETE_DEV_TEAM_MEMBERS = '[DevTeam] Delete DevTeamMembers',
  CLEAR_DEV_TEAM_MEMBERS = '[DevTeam] Clear DevTeamMembers',
}


export class GetDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.GET_DEV_TEAM_MEMBERS;

  constructor() {}
}

export class LoadDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.LOAD_DEV_TEAM_MEMBERS;

  constructor(public payload: DevTeamMember[]) {}
}

export class LoadDevTeamMembersFailed implements Action {
  readonly type = DevTeamMemberActionTypes.LOAD_DEV_TEAM_MEMBERS_FAILED;

  constructor() {}
}

export class AddDevTeamMember implements Action {
  readonly type = DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBER;

  constructor(public payload: DevTeamMember) {}
}

export class UpsertDevTeamMember implements Action {
  readonly type = DevTeamMemberActionTypes.UPSERT_DEV_TEAM_MEMBER;

  constructor(public payload: DevTeamMember) {
  }
}

export class AddDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.ADD_DEV_TEAM_MEMBERS;

  constructor(public payload: DevTeamMember[]) {}
}

export class UpsertDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.UPSERT_DEV_TEAM_MEMBERS;

  constructor(public payload: DevTeamMember[]) {
  }
}

export class UpdateDevTeamMember implements Action {
  readonly type = DevTeamMemberActionTypes.UPDATE_DEV_TEAM_MEMBER;

  constructor(public payload: Update<DevTeamMember> ) {}
}

export class UpdateDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.UPDATE_DEV_TEAM_MEMBERS;

  constructor(public payload: Update<DevTeamMember>[] ) {}
}

export class DeleteDevTeamMember implements Action {
  readonly type = DevTeamMemberActionTypes.DELETE_DEV_TEAM_MEMBER;

  constructor(public payload: DevTeamMemberId ) {}
}

export class DeleteDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.DELETE_DEV_TEAM_MEMBERS;

  constructor(public payload: DevTeamMemberId[]) {}
}

export class ClearDevTeamMembers implements Action {
  readonly type = DevTeamMemberActionTypes.CLEAR_DEV_TEAM_MEMBERS;
}

export type DevTeamMemberActions =
  | LoadDevTeamMembers
  | LoadDevTeamMembersFailed
  | AddDevTeamMember
  | UpsertDevTeamMember
  | AddDevTeamMembers
  | UpsertDevTeamMembers
  | UpdateDevTeamMember
  | UpdateDevTeamMembers
  | DeleteDevTeamMember
  | DeleteDevTeamMembers
  | ClearDevTeamMembers;

export type DevTeamMemberId = string;
