import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';


import { ProductState } from "../state/products.state";

export const productFeatureState = createFeatureSelector<ProductState>('products');//todo гафигачить lists && letters
// export const ingredientsFeatureState = createFeatureSelector<ProductState>('ingredients');
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

