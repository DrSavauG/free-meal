import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { Product, Products } from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiItemIdUrl: string = environment.apiItemIdUrl;
  private readonly apiItemsLetterUrl: string = environment.apiItemsLetterUrl;
  private readonly apiUrlRandom: string = environment.apiUrlRandom;
  private readonly apiSearchByNameUrl: string = environment.apiSearchByNameUrl;

  constructor(private http: HttpClient) {
  }

  public getRandomData(): Observable<Product[]> {
    return this.http.get<Products>(this.apiUrlRandom).pipe(
      map((response) => response.meals)
    );
  }

  public getSearchData(idMeals: string): Observable<Product[]> {
    const getUrl: string = `${this.apiItemIdUrl}${idMeals}`;
    return this.http.get<Products>(getUrl).pipe(
      map((response) => response.meals)
    );
  }

  public searchByLetter(letter: string): Observable<Product[]> {
    const searchLetterUrl: string = `${this.apiItemsLetterUrl}${letter}`;
    return this.http.get<Products>(searchLetterUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getSearchByName(letter: string): Observable<Product[]> {
    const searchLetterUrl: string = `${this.apiSearchByNameUrl}${letter}`;
    return this.http.get<Products>(searchLetterUrl).pipe(
      map((response) => response.meals)
    );
  }
}

export class ProductsService {
}
