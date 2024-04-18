import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { ProductState } from '../reducers/products.reducers';

export const productFeatureState = createFeatureSelector<ProductState>('products');

export const selectProduct = createSelector(
  productFeatureState,
  state => state.data///todo meals[0]
);
