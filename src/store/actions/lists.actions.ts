import { createAction, props } from "@ngrx/store";
import { LabelData } from "../../app/models/mock-products";

export enum LIST_ACTIONS {
  //
  LOAD_AREAS = '[LIST] Load Areas',
  LOAD_AREAS_SUCCESS = '[LIST] Load Areas Success',
  LOAD_AREAS_FAILURE = '[LIST] Load Areas Failure',
  //
  LOAD_LIST_BY_AREA = '[AREA] Load List By Area',
  LOAD_LIST_BY_AREA_SUCCESS = '[AREA] Load List By Area Success',
  LOAD_LIST_BY_AREA_FAILURE = '[AREA] Load List By Area Failure',
  //
  LOAD_CATEGORY = '[LIST] Load Category',
  LOAD_CATEGORY_SUCCESS = '[LIST] Load Category Success',
  LOAD_CATEGORY_FAILURE = '[LIST] Load Category Failure',
  ////
  LOAD_LIST_BY_CATEGORY = '[CATEGORY] Load List By Category',
  LOAD_LIST_BY_CATEGORY_SUCCESS = '[CATEGORY] Load List By Category Success',
  LOAD_LIST_BY_CATEGORY_FAILURE = '[CATEGORY] Load List By Category Failure',
  //
  LOAD_INGREDIENTS = '[LIST] Load Ingredients',
  LOAD_INGREDIENTS_SUCCESS = '[LIST] Load Ingredients Success',
  LOAD_INGREDIENTS_FAILURE = '[LIST] Load Ingredients Failure',
  //
  LOAD_LIST_BY_INGREDIENT = '[INGREDIENT] Load List By Ingredient',
  LOAD_LIST_BY_INGREDIENT_SUCCESS = '[INGREDIENT] Load List By Ingredient Success',
  LOAD_LIST_BY_INGREDIENT_FAILURE = '[INGREDIENT] Load List By Ingredient Failure',
}
export const loadAreas = createAction(
  LIST_ACTIONS.LOAD_AREAS);
export const loadAreaSuccess = createAction(
  LIST_ACTIONS.LOAD_AREAS_SUCCESS,
  props<{ areas: LabelData[] }>()
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
  props<{ categories: LabelData[] }>()
);
export const loadCategoryFailure = createAction(
  LIST_ACTIONS.LOAD_CATEGORY_FAILURE,
  props<{ error: Error }>()
);


export const loadIngredients = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS);
export const loadIngredientsSuccess = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS_SUCCESS,
  props<{ ingredients: LabelData[] }>()
);
export const loadIngredientsFailure = createAction(
  LIST_ACTIONS.LOAD_INGREDIENTS_FAILURE,
  props<{ error: Error }>()
);

