import { Action, createReducer, on } from "@ngrx/store";

import * as fromProductsActions from "../actions/products.actions";
import * as fromListsActions from "../actions/lists.actions";
import * as fromRawIngredientsActions from "../actions/ingredients.actions";
import * as fromFavoritesActions from "../actions/favorites.actions";
import { initialProductsState, ProductState } from "../state/products.state";

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
  on(fromRawIngredientsActions.loadRawIngredientsSuccess,
    (state, {rawIngredients}) => ({
      ...state,
      loading: false,
      loaded: true,
      rawIngredients
    })),
  on(fromFavoritesActions.loadAllFavoritesSuccess,
    (state, {favorites}) => ({
      ...state,
      loading: false,
      loaded: true,
      favorites
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
    fromRawIngredientsActions.loadRawIngredientsFailure,
    fromListsActions.loadListByAreaFailure,
    fromListsActions.loadListByCategoryFailure,
    fromListsActions.loadListByIngredientFailure,
    fromListsActions.loadMealsByNameFailure,
    fromListsActions.loadMealsByLetterFailure,
    fromFavoritesActions.loadAllFavoritesFailure,
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
    fromRawIngredientsActions.loadRawIngredients,
    fromListsActions.loadListByArea,
    fromListsActions.loadListByCategory,
    fromListsActions.loadListByIngredient,
    fromListsActions.loadMealsByLetter,
    fromListsActions.loadMealsByName,
    fromListsActions.loadMealsByLetter,
    fromFavoritesActions.loadAllFavorites,
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
