import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/app.reducers';

export const productFeatureState = createFeatureSelector<AppState>('products');//todo гафигачить lists && letters

export const selectProduct = createSelector(
  productFeatureState,
  state => state.data///todo или meals[0]
);
export const selectAreas = createSelector(
  productFeatureState,
  state => state.areas///todo или meals[0]
);
export const selectCategories = createSelector(
  productFeatureState,
  state => state.categories///todo или meals[0]
);
export const selectIngredients = createSelector(
  productFeatureState,
  state => state.ingredients///todo или meals[0]
);
