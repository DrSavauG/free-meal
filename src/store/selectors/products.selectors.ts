import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { ProductState } from "../state/products.state";

export const productFeatureState = createFeatureSelector<ProductState>('products');
//todo mv to ingredients
export const selectIngredientsByName = (nameIngredient: string) => {
  const capitalizeName = nameIngredient.replace(/^\w/, (string) => string.toUpperCase());
  return createSelector(
    productFeatureState,
    (state: ProductState) => state.rawIngredients
      .filter(ingredient => ingredient.strIngredient === capitalizeName)
  );
};

export const selectProduct = createSelector(
  productFeatureState,
  state => state.data
);
export const selectAreas = createSelector(
  productFeatureState,
  state => state.areas
);
export const selectCategories = createSelector(
  productFeatureState,
  state => state.categories
);
export const selectIngredients = createSelector(
  productFeatureState,
  state => state.ingredients
);
export const selectListOfCategories = createSelector(
  productFeatureState,
  state => state.list
);

export const selectListOfMeals = createSelector(
  productFeatureState,
  state => state.meals
);
export const selectRawIngredients = createSelector(
  productFeatureState,
  state => state.rawIngredients
);

export const selectAllFavorites = createSelector(
  productFeatureState,
  state => state.favorites
);

