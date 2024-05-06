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

export const abcString: string = 'abcdefghijklmnopqrstuvwxyz';
export const TITLE: string = 'free meal';

