import { Injectable } from '@angular/core';

import { Product, ProductData, ProductIngredient, ProductRecipe } from "../models/mock-products";
import { ProductDataKeys } from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ConvertRecipeService {
  private readonly namesKeysIngredient = {strIngredient: "strIngredient", strMeasure: "strMeasure"} as const;

  constructor() {
  }

  public createArrOfIngredients(product: Product | null): ProductRecipe | null {
    if(product) {
      const productIngredient: ProductIngredient = Object.keys(product)
        .filter(key => !this.isExcludedKey(key))
        .reduce((obj, key) => {
          obj[key as keyof ProductIngredient] = <string>product[key as keyof Product];
          return obj;
        }, {} as ProductIngredient);

      const ingredients = this.getValuesByKey(productIngredient, this.namesKeysIngredient.strIngredient);
      const measures = this.getValuesByKey(productIngredient, this.namesKeysIngredient.strMeasure);

      return {ingredients, measures};
    }
    return null;
  }

  private isExcludedKey = (key: string): key is keyof ProductData => ProductDataKeys.includes(key as keyof ProductData);

  private getValuesByKey(productIngredient: ProductIngredient, nameKey: string): string[] {
    return Object.keys(productIngredient)
      .filter(key => key.includes(nameKey))
      .map(key => productIngredient[key as keyof ProductIngredient])
      .filter(value => value);
  }
}
