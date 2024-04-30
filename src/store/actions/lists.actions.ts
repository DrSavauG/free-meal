import { createAction, props } from "@ngrx/store";
import { Category, LabelData, Product, StrIngredient } from "../../app/models/mock-products";

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
  LOAD_LIST_BY_AREA = '[AREA] Load List By Area',
  LOAD_LIST_BY_AREA_SUCCESS = '[AREA] Load List By Area Success',
  LOAD_LIST_BY_AREA_FAILURE = '[AREA] Load List By Area Failure',
  //
  LOAD_LIST_BY_CATEGORY = '[CATEGORY] Load List By Category',
  LOAD_LIST_BY_CATEGORY_SUCCESS = '[CATEGORY] Load List By Category Success',
  LOAD_LIST_BY_CATEGORY_FAILURE = '[CATEGORY] Load List By Category Failure',
//
  LOAD_LIST_BY_INGREDIENT = '[INGREDIENT] Load List By Ingredient',
  LOAD_LIST_BY_INGREDIENT_SUCCESS = '[INGREDIENT] Load List By Ingredient Success',
  LOAD_LIST_BY_INGREDIENT_FAILURE = '[INGREDIENT] Load List By Ingredient Failure',
  //
  LOAD_MEALS_BY_NAME = '[MEALS] Load Meals By Name',
  LOAD_MEALS_BY_NAME_SUCCESS = '[MEALS] Load Meals By Name Success',
  LOAD_MEALS_BY_NAME_FAILURE = '[MEALS] Load Meals By Name Failure',
  //
  // LOAD_MEALS_BY_LETTER
  LOAD_MEALS_BY_LETTER = '[MEALS] Load Meals By Letter',
  LOAD_MEALS_BY_LETTER_SUCCESS = '[MEALS] Load Meals By Letter Success',
  LOAD_MEALS_BY_LETTER_FAILURE = '[MEALS] Load Meals By Letter Failure',
  ////
  LOAD_RAW_INGREDIENTS = '[INGREDIENTS] Load Raw Ingredients Ingredient',
  LOAD_RAW_INGREDIENTS_SUCCESS = '[INGREDIENTS] Load Raw Ingredients Ingredient Success',
  LOAD_RAW_INGREDIENTS_FAILURE = '[INGREDIENTS] Load Raw Ingredients Ingredient Failure',
  // ////
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


//// raw

export const loadRawIngredients = createAction(
  LIST_ACTIONS.LOAD_RAW_INGREDIENTS);
export const loadRawIngredientsSuccess = createAction(
  LIST_ACTIONS.LOAD_RAW_INGREDIENTS_SUCCESS,
  props<{ rawIngredients: StrIngredient[] }>()
);
export const loadRawIngredientsFailure = createAction(
  LIST_ACTIONS.LOAD_RAW_INGREDIENTS_FAILURE,
  props<{ error: Error }>()
);

///////////////list--------------------
export const loadListByArea = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA,
  props<{ category: string }>()
);

export const loadListByAreaSuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA_SUCCESS,
  props<{ list: Category[] }>()//todo переписать
);
export const loadListByAreaFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_AREA_FAILURE,
  props<{ error: Error }>()
);
///
export const loadListByCategory = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY,
  props<{ category: string }>()
);
export const loadListByCategorySuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY_SUCCESS,
  props<{ list: Category[]}>()///todo переписать
);
export const loadListByCategoryFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_CATEGORY_FAILURE,
  props<{ error: Error }>()
);

////
export const loadListByIngredient = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT,
  props<{ category: string }>()
);
export const loadListByIngredientSuccess = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT_SUCCESS,
  props<{list: Category[] }>()///todo переписать
);
export const loadListByIngredientFailure = createAction(
  LIST_ACTIONS.LOAD_LIST_BY_INGREDIENT_FAILURE,
  props<{ error: Error }>()
);
////
export const loadMealsByName = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME,
  props<{ name: string }>()
);
export const loadMealsByNameSuccess = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME_SUCCESS,
  props<{meals: Product[] }>()///todo переписать
);
export const loadMealsByNameFailure = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_NAME_FAILURE,
  props<{ error: Error }>()
);
// return this.httpService.getSearchByLetter(searchItems);
export const loadMealsByLetter = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER,
  props<{ letter: string }>()
);
export const loadMealsByLetterSuccess = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER_SUCCESS,
  props<{meals: Product[] }>()///todo переписать
);
export const loadMealsByLetterFailure = createAction(
  LIST_ACTIONS.LOAD_MEALS_BY_LETTER_FAILURE,
  props<{ error: Error }>()
);


// return this.httpService.getSearchByLetter(searchItems);//todo fo

