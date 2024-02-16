import { Injectable } from '@angular/core';

import { IngredientsInterface } from "../models/ingredient.interface";
import { Product } from "../models/mock-products";

@Injectable({
  providedIn: 'root'
})
export class ConvertRecipeService {

  constructor() {
  }

  public createArrOfIngredients(product: Product | null, urlImg: string): IngredientsInterface {
    const result = [];
    for (let i = 1; i < 21; i++) {
      if(product) {
        const strIngredient = 'strIngredient' + i as keyof Product;
        const strMeasure = 'strMeasure' + i as keyof Product;
        const ingredient = product[strIngredient];
        const measure = product[strMeasure];
        const urlImgSmall = `${urlImg}${ingredient}-Small.png`;
        if(ingredient) {
          result.push({ingredient, measure, urlImgSmall});
        }
      }
    }
    return result;
  }
}
