import { Category, LabelData, Product, StrAreas } from "../../app/models/mock-products";
import { Action, createReducer, on } from "@ngrx/store";
import * as fromProductsActions from "../actions/products.actions";
import * as fromListsActions from "../actions/lists.actions";

export interface AppState {
  data: Product | null,
  loading: boolean,
  loaded: boolean,
  cash: Product[] | null,
  err: null | Error,
  areas: LabelData[] | null,
  categories: LabelData[] | null,
  ingredients: LabelData[] | null,
  list:Category[]|null
}

export const initialProductsState: AppState = {
  // meals: [],
  data: null,
  loading: false,
  loaded: true,
  err: null,
  cash: null,//todo add reducer,
  areas: null,
  categories: null,
  ingredients: null,
  list:null

};

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
      areas: areas,
    })),
  on(fromListsActions.loadAreaFailure,
    (state, {error}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: error
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

  ////////////list of


);

export function appReducers(state = initialProductsState, action: Action): AppState {
  return getProduct(state, action);
}
