export interface IngredientInterface {
  ingredient: string | null;
  measure: string | null;
  urlImgSmall:string;
}
export interface IngredientsInterface extends Array<IngredientInterface> {}
