export interface IngredientInterface {
  ingredient: string | null;
  measure: string | null;
  srcSmall:string;
}
export interface IngredientsInterface extends Array<IngredientInterface> {}
