import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { AppState } from '../reducers/app.reducers';

export const productFeatureState = createFeatureSelector<AppState>('products');//todo гафигачить lists && letters
export const ingredientsFeatureState = createFeatureSelector<AppState>('ingredients');

export const selectProduct = createSelector(
  productFeatureState,
  state => state.data///todo или meals[0]
);
////
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
///////todo переписать featureselector
export const selectListOfCategories = createSelector(
  productFeatureState,
  state => state.list
);

export const selectListOfMeals = createSelector(
  productFeatureState,
  state => state.meals
);
//todo reused?
export const selectRawIngredients = createSelector(
  productFeatureState,
  state => state.rawIngredients
);
//todo mv to ingredients
// export const selectIngredientsByName = (name: string) => {
//   createSelector(ingredientsFeatureState, (state) => {
//     const capitalizeName = name.replace(/^\w/, (c) => c.toUpperCase());
//     return state.rawIngredients.filter((ingredient) => ingredient.strIngredient === capitalizeName);
//   });
// };
export const selectIngredientsByName = createSelector(
  productFeatureState,
  (state: AppState, props: { name: string }) => {
    const capitalizeName = props.name.replace(/^\w/, (c) => c.toUpperCase());
    return state.rawIngredients.filter(ingredient => ingredient.strIngredient === capitalizeName);
  }
);
