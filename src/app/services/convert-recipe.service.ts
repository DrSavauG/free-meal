import { Injectable } from '@angular/core';

import { Product, ProductData, ProductIngredient, ProductRecipe } from "../models/mock-products";

@Injectable({
  providedIn: 'root'
})
export class ConvertRecipeService {

  constructor() {
  }

  public createArrOfIngredients(product: Product | null): ProductRecipe | null {
    if(!product) {
      return null;
    }
    const productIngredient: ProductIngredient = Object.keys(product)
      .filter(key => !this.isExcludedKey(key))
      .reduce((obj, key) => {
        obj[key as keyof ProductIngredient] = <string>product[key as keyof Product];
        return obj;
      }, {} as ProductIngredient);

    return {
      ingredients: this.getData(productIngredient, "strIngredient"),
      measures: this.getData(productIngredient, "strMeasure"),
    };
  }

  private isExcludedKey = (key: string): key is keyof ProductData => this.getExcludedKeys().includes(key as keyof ProductData);

  private getData(productIngredient: ProductIngredient, nameKey: string): string[] {
    return Object.keys(productIngredient)
      .filter(key => key.includes(nameKey))
      .map(key => productIngredient[key as keyof ProductIngredient])
      .filter(value => value);
  }

  private getExcludedKeys(): Array<string> {
    return [
      'idMeal',
      'strMeal',
      'strDrinkAlternate',
      'strCategory',
      'strArea',
      'strInstructions',
      'strMealThumb',
      'strTags',
      'strYoutube',
      'strSource',
      'strImageSource',
      'strCreativeCommonsConfirmed',
      'dateModified'
    ];
  }
}
