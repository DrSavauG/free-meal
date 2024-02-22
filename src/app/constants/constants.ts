import { ProductData } from "../models/mock-products";

export const ProductDataKeys: readonly(keyof ProductData)[] = [
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
] as const;
