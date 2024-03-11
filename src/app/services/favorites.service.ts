import { Injectable } from '@angular/core';
import { Product } from "../models/mock-products";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() {
  }

  public deleteFavorite(id: string): void {
    localStorage.removeItem(id);
  }

  public getFavoriteById(id: string): string | null {
    return localStorage.getItem(id);
  }

  public setFavorite(product: Product): void {
    localStorage.setItem(product.idMeal, JSON.stringify(product));
  }

  public getAllFavorites(): Product[] {
    return Object.values(localStorage).map(elString => JSON.parse(elString));
  }

}
