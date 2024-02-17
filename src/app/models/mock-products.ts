export interface Products {
  meals: Product[]
}

export interface Product extends ProductData, ProductIngredient {
}

export interface Category {
  strMeal: string,
  strMealThumb: string,
  idMeal: string
}

export interface Categoryes {
  meals: Category[]
}

export interface ProductData extends Category {
  strDrinkAlternate: null | string,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strTags: null,
  strYoutube: string,
  strSource: string,
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null
}

export interface ProductIngredient extends Ingredient, Measure {
}

export interface Ingredient {
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string,
  strIngredient5: string,
  strIngredient6: string,
  strIngredient7: string,
  strIngredient8: string,
  strIngredient9: string,
  strIngredient10: string,
  strIngredient11: string,
  strIngredient12: string,
  strIngredient13: string,
  strIngredient14: string,
  strIngredient15: string,
  strIngredient16: string,
  strIngredient17: string,
  strIngredient18: string,
  strIngredient19: string,
  strIngredient20: string,
}

export interface Measure {
  strMeasure1: string,
  strMeasure2: string,
  strMeasure3: string,
  strMeasure4: string,
  strMeasure5: string,
  strMeasure6: string,
  strMeasure7: string,
  strMeasure8: string,
  strMeasure9: string,
  strMeasure10: string,
  strMeasure11: string,
  strMeasure12: string,
  strMeasure13: string,
  strMeasure14: string,
  strMeasure15: string,
  strMeasure16: string,
  strMeasure17: string,
  strMeasure18: string,
  strMeasure19: string,
  strMeasure20: string
}

export interface ProductRecipe {
  ingredients: string[];
  measures: string[];
}


