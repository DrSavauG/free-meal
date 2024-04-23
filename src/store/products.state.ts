import { ActionReducerMap } from "@ngrx/store";

import * as fromProductsReducers from './reducers/app.reducers';

export interface AppState{
  products: fromProductsReducers.AppState
}

export const appReducers :ActionReducerMap<AppState>={
  products: fromProductsReducers.appReducers
};





