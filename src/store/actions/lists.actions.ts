import { createAction, props } from "@ngrx/store";
import { Category, LabelData, Product } from "../../app/models/mock-products";

export enum LIST_ACTIONS {
  LOAD_AREAS = '[LIST] Load Areas',
  LOAD_AREAS_SUCCESS = '[LIST] Load Areas Success',
  LOAD_AREAS_FAILURE = '[LIST] Load Areas Failure',
///////
  LOAD_CATEGORY = '[LIST] Load Category',
  LOAD_CATEGORY_SUCCESS = '[LIST] Load Category Success',
  LOAD_CATEGORY_FAILURE = '[LIST] Load Category Failure',
  ////
  LOAD_INGREDIENTS = '[LIST] Load Ingredients',
  LOAD_INGREDIENTS_SUCCESS = '[LIST] Load Ingredients Success',
  LOAD_INGREDIENTS_FAILURE = '[LIST] Load Ingredients Failure',
  //////////////////////
  LOAD_LIST_BY_AREA = '[LIST] Load List By Area',
  LOAD_LIST_BY_AREA_SUCCESS = '[LIST] Load List By Area Success',
  LOAD_LIST_BY_AREA_FAILURE = '[LIST] Load List By Area Failure',
  //
  LOAD_LIST_BY_CATEGORY = '[LIST] Load List By Category',
  LOAD_LIST_BY_CATEGORY_SUCCESS = '[LIST] Load List By Category Success',
  LOAD_LIST_BY_CATEGORY_FAILURE = '[LIST] Load List By Category Failure',
//
  LOAD_LIST_BY_INGREDIENT = '[LIST] Load List By Ingredient',
  LOAD_LIST_BY_INGREDIENT_SUCCESS = '[LIST] Load List By Ingredient Success',
  LOAD_LIST_BY_INGREDIENT_FAILURE = '[LIST] Load List By Ingredient Failure',
  //
  LOAD_MEALS_BY_NAME = '[LIST] Load Meals By Name',
  LOAD_MEALS_BY_NAME_SUCCESS = '[LIST] Load Meals By Name Success',
  LOAD_MEALS_BY_NAME_FAILURE = '[LIST] Load Meals By Name Failure',
  //
  LOAD_MEALS_BY_LETTER = '[LIST] Load Meals By Letter',
  LOAD_MEALS_BY_LETTER_SUCCESS = '[LIST] Load Meals By Letter Success',
  LOAD_MEALS_BY_LETTER_FAILURE = '[LIST] Load Meals By Letter Failure',
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
export const loadListByArea = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA,
  props<{ category: string }>()
);
export const loadListByAreaSuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA_SUCCESS,
  props<{ list: Category[] }>()
);
export const loadListByAreaFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA_FAILURE,
  props<{ error: Error }>()
);
export const loadListByCategory = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY,
  props<{ category: string }>()
);
export const loadListByCategorySuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY_SUCCESS,
  props<{ list: Category[]}>()
);
export const loadListByCategoryFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY_FAILURE,
  props<{ error: Error }>()
);
export const loadListByIngredient = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT,
  props<{ category: string }>()
);
export const loadListByIngredientSuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT_SUCCESS,
  props<{list: Category[] }>()
);
export const loadListByIngredientFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT_FAILURE,
  props<{ error: Error }>()
);
export const loadMealsByName = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME,
  props<{ name: string }>()
);
export const loadMealsByNameSuccess = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME_SUCCESS,
  props<{meals: Product[] }>()
);
export const loadMealsByNameFailure = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME_FAILURE,
  props<{ error: Error }>()
);
export const loadMealsByLetter = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER,
  props<{ letter: string }>()
);
export const loadMealsByLetterSuccess = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER_SUCCESS,
  props<{meals: Product[] }>()
);
export const loadMealsByLetterFailure = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER_FAILURE,
  props<{ error: Error }>()
);
