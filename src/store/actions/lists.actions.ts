//////////////////////////////
import { createAction, props } from "@ngrx/store";
import { Product } from "../../app/models/mock-products";

export enum LIST_ACTIONS {
  LOAD_AREAS = '[LIST] Load Areas',
  LOAD_AREAS_SUCCESS = '[LIST] Load Areas Success',
  LOAD_AREAS_FAILURE = '[LIST] Load Areas Failure',
  //
  LOAD_CATEGORY = '[LIST] Load Category',
  LOAD_CATEGORY_SUCCESS = '[LIST] Load Category Success',
  LOAD_CATEGORY_FAILURE = '[LIST] Load Category Failure',
  //
  LOAD_INGREDIENTS = '[LIST] Load Ingredients',
  LOAD_INGREDIENTS_SUCCESS = '[LIST] Load Ingredients Success',
  LOAD_INGREDIENTS_FAILURE = '[LIST] Load Ingredients Failure',
}
export const loadAreas = createAction(
  LIST_ACTIONS.LOAD_AREAS);
export const loadAreaSuccess = createAction(
  LIST_ACTIONS.LOAD_AREAS_SUCCESS,
  props<{ product: Product }>()
);
export const loadAreaFailure = createAction(
  LIST_ACTIONS.LOAD_AREAS_FAILURE,
  props<{ error: Error }>()
);
//
export const loadCategory = createAction(
  LIST_ACTIONS.LOAD_CATEGORY);
export const loadCategorySuccess = createAction(
  LIST_ACTIONS.LOAD_CATEGORY_SUCCESS,
  props<{ product: Product }>()
);
export const loadCategoryFailure = createAction(
  LIST_ACTIONS.LOAD_CATEGORY_FAILURE,
  props<{ error: Error }>()
);


export const loadIngredients = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS);
export const loadIngredientsSuccess = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS_SUCCESS,
  props<{ product: Product }>()
);
export const loadIngredientsFailure = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS_FAILURE,
  props<{ error: Error }>()
);

