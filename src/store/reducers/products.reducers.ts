import { Product } from "../../app/models/mock-products";
import { Action, createReducer, on } from "@ngrx/store";
import { getProductRandom, getProductRandomFailure, getProductRandomSuccess } from "../actions/products.actions";

export interface ProductState {
  // meals: Products[],
  data: Product | null,
}

export const initialProductsState: ProductState = {//todo поменять id:{meals:[{idMeal:'',}]}
  // meals: [],
  data: null
};

export const getRandomProduct = createReducer(
  initialProductsState,

  on(getProductRandom,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
      data: null,
      err: null,

    })
  ),
  on(getProductRandomSuccess, (state, {product}) => ({
    ...state,
    loading: false,
    loaded: true,
    data: product,
    err: null,
  })),
  on(getProductRandomFailure, (state, err) => ({
    ...state,
    loading: false,
    loaded: false,
    data: null,
    error: err
  }))
);

export function productsReducers(state = initialProductsState, action: Action): ProductState {
  return getRandomProduct(state, action);
}
