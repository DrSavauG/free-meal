import { createAction, props } from "@ngrx/store";
import { StrIngredient } from "../../app/models/mock-products";

export enum INGREDIENTS_ACTIONS {
  LOAD_RAW_INGREDIENTS = '[INGREDIENTS] Load Raw Ingredients Ingredient',
  LOAD_RAW_INGREDIENTS_SUCCESS = '[INGREDIENTS] Load Raw Ingredients Ingredient Success',
  LOAD_RAW_INGREDIENTS_FAILURE = '[INGREDIENTS] Load Raw Ingredients Ingredient Failure',
}

export const loadRawIngredients = createAction(
  INGREDIENTS_ACTIONS.LOAD_RAW_INGREDIENTS);
export const loadRawIngredientsSuccess = createAction(
  INGREDIENTS_ACTIONS.LOAD_RAW_INGREDIENTS_SUCCESS,
  props<{ rawIngredients: StrIngredient[] }>()
);
export const loadRawIngredientsFailure = createAction(
  INGREDIENTS_ACTIONS.LOAD_RAW_INGREDIENTS_FAILURE,
  props<{ error: Error }>()
);

