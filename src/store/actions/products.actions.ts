import { createAction, props } from "@ngrx/store";

import { Product } from "../../app/models/mock-products";

export enum PRODUCTS_ACTIONS {
  GET_PRODUCT_RANDOM = '[PRODUCTS] GET PRODUCT RANDOM',
  GET_PRODUCT_RANDOM_SUCCESS = '[PRODUCTS] GET PRODUCT SUCCESS',
  GET_PRODUCT_RANDOM_FAILURE = '[PRODUCTS] GET PRODUCT FAILURE',
}

export const getProductRandom = createAction(
  PRODUCTS_ACTIONS.GET_PRODUCT_RANDOM);

export const getProductRandomSuccess = createAction(
  PRODUCTS_ACTIONS.GET_PRODUCT_RANDOM_SUCCESS,
  props<{ product: Product }>()
);

export const getProductRandomFailure = createAction(
  PRODUCTS_ACTIONS.GET_PRODUCT_RANDOM_FAILURE,
  props<{ error: Error }>()
);

