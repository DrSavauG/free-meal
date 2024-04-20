import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { ProductState } from '../reducers/products.reducers';

export const productFeatureState = createFeatureSelector<ProductState>('products');

export const selectProduct = createSelector(
  productFeatureState,
  state => state.data///todo или meals[0]
);
export const selectlists = createSelector(
  productFeatureState,
  state => state.category///todo или meals[0]
);
