import { Category, Product } from "../../app/models/mock-products";
import { Action, createReducer, on } from "@ngrx/store";
import * as fromProductsActions from "../actions/products.actions";

export interface ProductState {
  data: Product | null,
  loading: boolean,
  loaded: boolean,
  cash : Product[]|null,
  err: null | Error,
  category: Category[]|null,
}

export const initialProductsState: ProductState = {
  // meals: [],
  data: null,
  loading: false,
  loaded: true,
  err: null,
  cash : null,//todo add reducer,
  category:null

};

export const getProduct = createReducer(
  initialProductsState,

  on(fromProductsActions.loadProductRandom,fromProductsActions.loadProductById,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
    })
  ),
  on(fromProductsActions.loadProductRandomSuccess,fromProductsActions.loadProductByIdSuccess, (state, {product}) => ({
    ...state,
    loading: false,
    loaded: true,
    data: product,
  })),
  on(fromProductsActions.loadProductRandomFailure, fromProductsActions.loadProductByIdFailure,(state, err) => ({
    ...state,
    loading: false,
    loaded: false,
    error: err
  }))
);

export function productsReducers(state = initialProductsState, action: Action): ProductState {
  return getProduct(state, action);
}
