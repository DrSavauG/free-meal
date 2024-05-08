import { createAction, props } from "@ngrx/store";

import { Product } from "../../app/models/mock-products";

export enum FAVORITES_ACTIONS {
  LOAD_ALL_FAVORITES = '[FAVORITES] All Favorites',
  LOAD_ALL_FAVORITES_SUCCESS = '[FAVORITES] All Favorites Success',
  LOAD_ALL_FAVORITES_FAILURE = '[FAVORITES] All Favorites Failure',

  ADD_TO_FAVORITES = '[FAVORITES] Add to Favorites',
  ADD_TO_FAVORITES_SUCCESS = '[FAVORITES] Add to Favorites Success',
  ADD_TO_FAVORITES_FAILURE = '[FAVORITES] Add to Favorites Failure',

  DELETE_FROM_FAVORITES = '[FAVORITES] Delete from Favorites',
  DELETE_FROM_FAVORITES_SUCCESS = '[FAVORITES] Delete from Favorites Success',
  DELETE_FROM_FAVORITES_FAILURE = '[FAVORITES] Delete from Favorites Failure'
}

export const loadAllFavorites = createAction(
  FAVORITES_ACTIONS.LOAD_ALL_FAVORITES);
export const loadAllFavoritesSuccess = createAction(
  FAVORITES_ACTIONS.LOAD_ALL_FAVORITES_SUCCESS,
  props<{ favorites: Product[] }>()
);
export const loadAllFavoritesFailure = createAction(
  FAVORITES_ACTIONS.LOAD_ALL_FAVORITES_FAILURE,
  props<{ error: Error }>()
);


export const addToFavorites = createAction(
  FAVORITES_ACTIONS.ADD_TO_FAVORITES,
  props<{product: Product }>()
  );//todo id
export const addToFavoritesSuccess = createAction(
  FAVORITES_ACTIONS.ADD_TO_FAVORITES_SUCCESS,
  props<{ favorites: Product[] }>()
);
export const addToFavoritesFailure = createAction(
  FAVORITES_ACTIONS.ADD_TO_FAVORITES_FAILURE,
  props<{ error: Error }>()
);
export const deleteFromFavorites = createAction(
  FAVORITES_ACTIONS.DELETE_FROM_FAVORITES,
  props<{ id: string }>
  );//todo id
export const deleteFromFavoritesSuccess = createAction(
  FAVORITES_ACTIONS.DELETE_FROM_FAVORITES_SUCCESS,
  props<{ favorites: Product[] }>()
);
export const deleteFromFavoritesFailure = createAction(
  FAVORITES_ACTIONS.DELETE_FROM_FAVORITES_FAILURE,
  props<{ error: Error }>()
);

