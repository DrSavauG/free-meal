import { Action, createReducer, on } from "@ngrx/store";

import * as fromProductsActions from "../actions/products.actions";
import * as fromListsActions from "../actions/lists.actions";
import { initialProductsState, ProductState } from "../state/products.state";
import {
  loadRawIngredients,
  loadRawIngredientsFailure,
  loadRawIngredientsSuccess
} from "../actions/ingredients.actions";

export const getProduct = createReducer(
  initialProductsState,
  on(
    fromProductsActions.loadProductRandomSuccess,
    fromProductsActions.loadProductByIdSuccess,
    (state, {product}) => ({
      ...state,
      loading: false,
      loaded: true,
      data: product,
    })),
  on(fromListsActions.loadAreaSuccess,
    (state, {areas}) => ({
      ...state,
      loading: false,
      loaded: true,
      areas,
    })),
  on(fromListsActions.loadCategorySuccess,
    (state, {categories}) => ({
      ...state,
      loading: false,
      loaded: true,
      categories
    })),
  on(fromListsActions.loadIngredientsSuccess,
    (state, {ingredients}) => ({
      ...state,
      loading: false,
      loaded: true,
      ingredients
    })),
  on(loadRawIngredientsSuccess,
    (state, {rawIngredients}) => ({
      ...state,
      loading: false,
      loaded: true,
      rawIngredients
    })),
  on(
    fromListsActions.loadListByAreaSuccess,
    fromListsActions.loadListByCategorySuccess,
    fromListsActions.loadListByIngredientSuccess,
    (state, {list}) => ({
      ...state,
      loading: false,
      loaded: true,
      list
    })),
  on(
    fromListsActions.loadMealsByNameSuccess,
    fromListsActions.loadMealsByLetterSuccess,
    (state, {meals}) => ({
      ...state,
      loading: false,
      loaded: true,
      meals
    })),
  on(
    fromProductsActions.loadProductRandomFailure,
    fromProductsActions.loadProductByIdFailure,
    fromListsActions.loadAreaFailure,
    fromListsActions.loadCategoryFailure,
    fromListsActions.loadIngredientsFailure,
    loadRawIngredientsFailure,
    fromListsActions.loadListByAreaFailure,
    fromListsActions.loadListByCategoryFailure,
    fromListsActions.loadListByIngredientFailure,
    fromListsActions.loadMealsByNameFailure,
    fromListsActions.loadMealsByLetterFailure,
    (state, error) => ({
      ...state,
      loading: false,
      loaded: false,
      error
    })),
  on(
    fromProductsActions.loadProductRandom,
    fromProductsActions.loadProductById,
    fromListsActions.loadAreas,
    fromListsActions.loadCategory,
    fromListsActions.loadIngredients,
    loadRawIngredients,
    fromListsActions.loadListByArea,
    fromListsActions.loadListByCategory,
    fromListsActions.loadListByIngredient,
    fromListsActions.loadMealsByLetter,
    fromListsActions.loadMealsByName,
    fromListsActions.loadMealsByLetter,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),
);

export function productReducers(state = initialProductsState, action: Action): ProductState {
  return getProduct(state, action);
}
