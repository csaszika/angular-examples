import {ActionReducer, ActionReducerMap, combineReducers, compose} from '@ngrx/store';
import {environment} from '../../../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';

export interface AppState {

}

export const initialState: AppState = {

};

export const reducers: ActionReducerMap<AppState> = {

};

export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
export const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
