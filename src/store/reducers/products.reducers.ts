import { Product } from "../../app/models/mock-products";
import { Action, createReducer, on } from "@ngrx/store";
import * as fromProductsActions from "../actions/products.actions";

export interface ProductState {
  data: Product | null,
  loading: boolean,
  loaded: boolean,
  cash : Product[]|null,
  err: null | Error

}

export const initialProductsState: ProductState = {
  // meals: [],
  data: null,
  loading: false,
  loaded: true,
  err: null,
  cash : null,//todo add reducer

};

export const getProduct = createReducer(
  initialProductsState,

  on(fromProductsActions.loadProductRandom,fromProductsActions.loadProductById,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
      data: null,
      err: null,
    })
  ),
  on(fromProductsActions.loadProductRandomSuccess,fromProductsActions.loadProductByIdSuccess, (state, {product}) => ({
    ...state,
    loading: false,
    loaded: true,
    data: product,
    err: null,
  })),
  on(fromProductsActions.loadProductRandomFailure, fromProductsActions.loadProductByIdFailure,(state, err) => ({
    ...state,
    loading: false,
    loaded: false,
    data: null,
    error: err
  }))
);

export function productsReducers(state = initialProductsState, action: Action): ProductState {
  return getProduct(state, action);
}
