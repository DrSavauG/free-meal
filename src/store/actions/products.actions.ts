import { createAction, props } from "@ngrx/store";

import { Product } from "../../app/models/mock-products";

export enum PRODUCTS_ACTIONS {//todo !1111 add listall actions
  LOAD_PRODUCT_RANDOM = '[PRODUCTS] Load product random',
  LOAD_PRODUCT_RANDOM_SUCCESS = '[PRODUCTS] Load product random success',
  LOAD_PRODUCT_RANDOM_FAILURE = '[PRODUCTS] Load product random failure',
//Product by id
  LOAD_PRODUCT_BY_ID= '[PRODUCTS] Load product by ID',
  LOAD_PRODUCT_BY_ID_SUCCESS = '[PRODUCTS] Load product by ID success',
  LOAD_PRODUCT_BY_ID_FAILURE = '[PRODUCTS] Load product by ID failure',

}

//Product Random
export const loadProductRandom = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_RANDOM);

export const loadProductRandomSuccess = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_RANDOM_SUCCESS,
  props<{ product: Product }>()
);

export const loadProductRandomFailure = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_RANDOM_FAILURE,
  props<{ error: Error }>()
);

//Product by id
export const loadProductById = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_BY_ID,
  props<{ id: string }>()
);

export const loadProductByIdSuccess = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_BY_ID_SUCCESS,
  props<{ product: Product }>()
);

export const loadProductByIdFailure = createAction(
  PRODUCTS_ACTIONS.LOAD_PRODUCT_BY_ID_FAILURE,
  props<{ error: Error }>()
);
