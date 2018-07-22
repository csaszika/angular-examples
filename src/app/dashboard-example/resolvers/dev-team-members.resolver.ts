import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {DashboardFeatureState} from '../ngrx-feature-core/reducers';
import {DevTeamMember} from '../types/dev-team';
import {Observable, race} from 'rxjs';
import {selectAllDevTeamMembers} from '../ngrx-feature-core/reducers/dev-team/selectors';
import {take, tap} from 'rxjs/operators';
import {DevTeamMemberActionTypes, GetDevTeamMembers} from '../ngrx-feature-core/actions/dev-team/dev-team';
import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class DevTeamMembersResolver implements Resolve<Action> {

  constructor(private store: Store<DashboardFeatureState>,
              private router: Router,
              private action$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> | Action {
    let devs: DevTeamMember[];
    this.store.select(selectAllDevTeamMembers).pipe(take(1)).subscribe(members => devs = members);

    if (devs.length === 0) {
      this.store.dispatch(new GetDevTeamMembers());
      const responseOk = this.action$.ofType(DevTeamMemberActionTypes.LOAD_DEV_TEAM_MEMBERS);
      const responseError = this.action$.ofType(DevTeamMemberActionTypes.LOAD_DEV_TEAM_MEMBERS_FAILED)
        .pipe(tap(() => this.router.navigate([''])));

      return race(responseOk, responseError).pipe(take(1));
    }
  }


}
