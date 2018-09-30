import {DevTeamEffects} from './dev-team.effects';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {GetDevTeamMembers, LoadDevTeamMembers, LoadDevTeamMembersFailed} from '../actions/dev-team/dev-team.actions';
import {cold, hot} from 'jasmine-marbles';
import {DevTeamMember} from '../../types/dev-team';
import createSpyObj = jasmine.createSpyObj;
import {Action} from '@ngrx/store';

describe('Devteam effects', () => {

  let effects: DevTeamEffects;
  let service;
  let actions$: Observable<Action>;

  const developers: DevTeamMember[] = [
      { name: 'Josh', backend: 3, frontend: 5, teamwork: 5 },
      { name: 'Mary', backend: 4, frontend: 2, teamwork: 7 }
    ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DevTeamEffects,
        { provide: HttpClient, useValue: createSpyObj('service', ['get'])},
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.get(DevTeamEffects);
    service = TestBed.get(HttpClient);
  });

  it('should call the mock backend api and return the results', () => {
    const action = new GetDevTeamMembers();
    const result = new LoadDevTeamMembers(developers);

    actions$ = of(action);
    const response = cold('-a|', { a: developers });
    const expected = cold('-b|', { b: result });

    service.get.and.returnValue(response);

    expect(effects.loadDevTeamMembers$).toBeObservable(expected);
  });

  it('should call the mock backend api and return the results', () => {
    const action = new GetDevTeamMembers();
    const result = new LoadDevTeamMembers(developers);

    actions$ = hot('-a', {a: action});
    const response = cold('-b|', { b: developers });
    const expected = cold('--c', { c: result });

    service.get.and.returnValue(response);

    expect(effects.loadDevTeamMembers$).toBeObservable(expected);
  });

  it('should call the mock backend api and return with an error', () => {
    const error = 'FAIL';
    const action = new GetDevTeamMembers();
    const result = new LoadDevTeamMembersFailed();

    actions$ = cold('-a', {a: action});
    const response = cold('-#', {}, error);
    const expected = cold('--b', { b: result });

    service.get.and.returnValue(response);

    expect(effects.loadDevTeamMembers$).toBeObservable(expected);
  });

  it('should call the mock backend api and return with an error', () => {
    const error = 'FAIL';
    const action = new GetDevTeamMembers();
    const result = new LoadDevTeamMembersFailed();

    actions$ = hot('--a', {a: action});
    const response = cold('---#', {}, error);
    const expected = cold('-----b', { b: result });

    service.get.and.returnValue(response);

    console.log(effects.loadDevTeamMembers$);
    console.log(expected);

    expect(effects.loadDevTeamMembers$).toBeObservable(expected);
  });
});
