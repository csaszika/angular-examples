import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {DevTeamMemberActionTypes, LoadDevTeamMembers} from '../actions/dev-team/dev-team';
import {catchError, map, switchMap} from 'rxjs/operators';
import {DevTeamMember} from '../../types/dev-team';
import {Action} from '@ngrx/store';

@Injectable()
export class DevTeamEffects {

  @Effect()
  loadDevTeamMembers$: Observable<Action> = this.actions$.pipe(
    ofType(DevTeamMemberActionTypes.GET_DEV_TEAM_MEMBERS),
    switchMap(() =>
      this.http.get<DevTeamMember[]>('assets/resources/developers.json').pipe(
        map(data => new LoadDevTeamMembers({devTeamMembers: data as DevTeamMember[]})),
        catchError(err => of({type: 'FAILED', payload: null}))
      ))
  );

  constructor(private http: HttpClient,
              private actions$: Actions) {
  }
}
