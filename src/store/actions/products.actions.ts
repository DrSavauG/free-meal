import { createAction, props } from "@ngrx/store";

import { Product } from "../../app/models/mock-products";

export enum PRODUCTS_ACTIONS {//todo !1111 add listall actions
  LOAD_PRODUCT_RANDOM = '[PRODUCTS] Load Product Random',
  LOAD_PRODUCT_RANDOM_SUCCESS = '[PRODUCTS] Load Product Random Success',
  LOAD_PRODUCT_RANDOM_FAILURE = '[PRODUCTS] Load Product Random Failure',
//Product by id
  LOAD_PRODUCT_BY_ID = '[PRODUCTS] Load Product By ID',
  LOAD_PRODUCT_BY_ID_SUCCESS = '[PRODUCTS] Load Product By ID success',
  LOAD_PRODUCT_BY_ID_FAILURE = '[PRODUCTS] Load Product By ID failure',
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
