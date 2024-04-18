import { ActionReducerMap } from "@ngrx/store";

import * as fromProductsData from './reducers/products.reducers';

export interface AppState{
  products: fromProductsData.ProductState
}

export const appReducers :ActionReducerMap<AppState>={
  products: fromProductsData.productsReducers
};





