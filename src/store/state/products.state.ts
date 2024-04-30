import { ActionReducerMap } from "@ngrx/store";

import { Category, LabelData, Product, StrIngredient } from "../../app/models/mock-products";
import { productReducers } from "../reducers/product.reducers";

export interface ProductState {
  data: Product | null,
  loading: boolean,
  loaded: boolean,
  cash: Product[] | null,
  err: null | Error,
  areas: LabelData[] | null,
  categories: LabelData[] | null,
  ingredients: LabelData[] | null,
  rawIngredients: StrIngredient[],
  list: Category[] | null,
  meals: Product[] | null,
}

export interface AppState {
  products: ProductState
}

export const appReducers: ActionReducerMap<AppState> = {
  products: productReducers
};

export const initialProductsState: ProductState = {
  data: null,
  loading: false,
  loaded: true,
  err: null,
  cash: null,//todo add effects,
  areas: null,
  categories: null,
  ingredients: null,
  list: null,
  meals: null,
  rawIngredients: [{
    idIngredient: 'example',
    strIngredient: 'example',
    strDescription: null,
    strType: null
  }],
};
