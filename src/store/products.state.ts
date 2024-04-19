import { ActionReducerMap } from "@ngrx/store";

import * as fromProductsReducers from './reducers/products.reducers';

export interface AppState{
  products: fromProductsReducers.ProductState
}

export const appReducers :ActionReducerMap<AppState>={
  products: fromProductsReducers.productsReducers
};





