import { Injectable } from '@angular/core';
import { Product } from "../models/mock-products";
import { Observable, of } from "rxjs";

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

  public getAllFavorites$(): Observable<Product[]> {
    const allFavorites = Object.keys(localStorage)
      .filter(key => localStorage.getItem(key))
      .map(key => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      })
      .filter(product => product !== null) as Product[];
    return of(allFavorites);
  }

}
