import { Injectable } from '@angular/core';
import { Observable, of, tap } from "rxjs";

import { Product } from "../models/mock-products";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() {
  }

  public deleteFavorite$(id: string): Observable<null>  {
    localStorage.removeItem(id);
    return of(null);
  }

  public getFavoriteById(id: string): string | null {
    return localStorage.getItem(id);
  }

  public setFavorite$(product: Product): Observable<null> {
    localStorage.setItem(product.idMeal, JSON.stringify(product));
    return of(null);
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
