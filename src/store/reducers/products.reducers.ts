import { Product, Products } from "../../app/models/mock-products";
import { Action, createReducer, on } from "@ngrx/store";
import { getProductRandom, getProductRandomFailure, getProductRandomSuccess } from "../actions/products.actions";

export interface ProductState {
  meals: Products[],
  selectId: Product | null
}

export const initialProductsState: ProductState={//todo поменять id:{meals:[{idMeal:'',}]}
  meals: [],
  selectId:null
};

export const getRandomProduct = createReducer(
  initialProductsState,

  on(getProductRandom,
    (state) => ({
      ...state,
      loading: true,
      loaded: false,
      data: null
    })
  ),
  on(getProductRandomSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    data: product
  })),
  on(getProductRandomFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    data: null
  }))
);

export function productsReducers(state = initialProductsState,action:Action):ProductState{
  return getRandomProduct(state,action);
}
