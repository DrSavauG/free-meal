import { Action, createReducer, on } from "@ngrx/store";

import * as fromProductsActions from "../actions/products.actions";
import * as fromListsActions from "../actions/lists.actions";
import { initialProductsState, ProductState } from "../state/products.state";

export const getProduct = createReducer(
  initialProductsState,

  on(fromProductsActions.loadProductRandom, fromProductsActions.loadProductById,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),
  on(fromProductsActions.loadProductRandomSuccess, fromProductsActions.loadProductByIdSuccess, (state, {product}) => ({
    ...state,
    loading: false,
    loaded: true,
    data: product,
  })),
  on(fromProductsActions.loadProductRandomFailure, fromProductsActions.loadProductByIdFailure, (state, err) => ({
    ...state,
    loading: false,
    loaded: false,
    error: err
  })),
//////

  on(fromListsActions.loadAreas,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadAreaSuccess,
    (state, {areas}) => ({
      ...state,
      loading: false,
      loaded: true,
      areas,
    })),
  on(fromListsActions.loadAreaFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error
    })),
  //////

  on(fromListsActions.loadCategory,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadCategorySuccess,
    (state, {categories}) => ({
      ...state,
      loading: false,
      loaded: true,
      categories: categories,
    })),
  on(fromListsActions.loadCategoryFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  //////

  on(fromListsActions.loadIngredients,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadIngredientsSuccess,
    (state, {ingredients}) => ({
      ...state,
      loading: false,
      loaded: true,
      ingredients: ingredients,
    })),
  on(fromListsActions.loadIngredientsFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  //////

  on(fromListsActions.loadRawIngredients,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadRawIngredientsSuccess,
    (state, {rawIngredients}) => ({
      ...state,
      loading: false,
      loaded: true,
      rawIngredients: rawIngredients,
    })),
  on(fromListsActions.loadRawIngredientsFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),

  ////////////list of-------------------------------------===========
  //todo fails b fetch сгруппировать =одно и тоже
  on(fromListsActions.loadListByArea,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadListByAreaSuccess,
    (state, {list}) => ({
      ...state,
      loading: false,
      loaded: true,
      list: list,
    })),
  on(fromListsActions.loadListByAreaFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  // .....
  //todo fails b fetch сгруппировать =одно и тоже
  on(fromListsActions.loadListByCategory,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadListByCategorySuccess,
    (state, {list}) => ({
      ...state,
      loading: false,
      loaded: true,
      list: list,
    })),
  on(fromListsActions.loadListByCategoryFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  // .....
  //todo fails b fetch сгруппировать =одно и тоже
  on(fromListsActions.loadListByIngredient,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadListByIngredientSuccess,
    (state, {list}) => ({
      ...state,
      loading: false,
      loaded: true,
      list: list,
    })),
  on(fromListsActions.loadListByIngredientFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  // .....
  //todo fails b fetch сгруппировать =одно и тоже
  on(fromListsActions.loadMealsByName,
    fromListsActions.loadMealsByLetter,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(fromListsActions.loadMealsByNameSuccess,
    // fromListsActions.loadMealsByLetterSuccess,
    (state, {meals}) => ({
      ...state,
      loading: false,
      loaded: true,
      meals: meals,
    })),
  on(fromListsActions.loadMealsByNameFailure,
    // fromListsActions.loadMealsByLetterFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  // .....
  //todo fails b fetch сгруппировать =одно и тоже
  on(
    fromListsActions.loadMealsByLetter,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })),
  on(
    fromListsActions.loadMealsByLetterSuccess,
    (state, {meals}) => ({
      ...state,
      loading: false,
      loaded: true,
      meals: meals,
    })),
  on(
    fromListsActions.loadMealsByLetterFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
    })),
  // .....
);

export function productReducers(state = initialProductsState, action: Action): ProductState {
  return getProduct(state, action);
}
