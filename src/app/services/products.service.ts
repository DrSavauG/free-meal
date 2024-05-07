import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { catchError, map, Observable, shareReplay, throwError } from "rxjs";

import {
  Category,
  Categories,
  StrIngredient,
  StrIngredients,
  Product,
  Products, StrAreas, StrCategories, LabelData, CommonResults, CommonApiResponse
} from "../models/mock-products";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly config = environment;
  private cache = new Map<string, Observable<CommonResults>>();

  constructor(private http: HttpClient) {
  }

  public getRandomItem(): Observable<Product> {
    console.log('this.cache', this.cache);

    return this.http.get<Products>(this.config.apiUrlRandom).pipe(
      map((response) => response.meals[0])
    );
  }

  private fetchCachedData<ResultType extends CommonResults, ApiResponse extends CommonApiResponse>
  (key: string, url: string, mapFn: (response: ApiResponse) => ResultType): Observable<ResultType> {
    if(!this.cache.has(url)) {
      console.log(`Fetching : ${key}`);
      const observable = this.http.get<ApiResponse>(url).pipe(
        map(mapFn),
        shareReplay(1),
        catchError(error => {
          return throwError(() => new Error(`Error:${error} id: ${key}`));
        })
      );
      this.cache.set(url, observable);
    } else {
      console.log(`Cache: ${key}`);
    }
    return this.cache.get(url) as Observable<ResultType>;
  }

  public getItemById(idMeals: string): Observable<Product> {
    const url = `${this.config.apiItemIdUrl}${idMeals}`;
    return this.fetchCachedData<Product, Products>(idMeals, url,
      (response) => response.meals[0]);
  }

  public getSearchByLetter(letter: string): Observable<Product[]> {
    const url = `${this.config.apiItemsLetterUrl}${letter}`;
    return this.fetchCachedData<Product[], Products>(letter, url,
      (response) => response.meals);
  }

  public getSearchByName(letter: string): Observable<Product[]> {
    const url: string = `${this.config.apiSearchByNameUrl}${letter}`;
    return this.fetchCachedData<Product[], Products>(letter, url,
      (response) => response.meals);
  }

  public getByCategory(category: string): Observable<Category[]> {
    const url: string = `${this.config.apiSearchByCategory}${category}`;
    return this.fetchCachedData<Category[], Categories>(category, url,
      (response) => response.meals);
  }

  public getByArea(category: string): Observable<Category[]> {
    const url: string = `${this.config.apiSearchByArea}${category}`;
    return this.fetchCachedData<Category[], Categories>(category, url,
      (response) => response.meals);
  }

  public getByIngredient(ingredient: string): Observable<Category[]> {
    const url: string = `${this.config.apiSearchByIngredient}${ingredient}`;
    return this.fetchCachedData<Category[], Categories>(ingredient, url,
      (response) => response.meals);
  }

  public getRawListAllIngredients(): Observable<StrIngredient[]> {
    const key = 'getRawListAllIngredients';
    return this.fetchCachedData<StrIngredient[], StrIngredients>(key, this.config.apiListAllIngredients,
      (response) => response.meals);
  }

  public getListAllIngredients(): Observable<LabelData[]> {
    const key = 'getListAllIngredients';
    return this.fetchCachedData<LabelData[], StrIngredients>(key, this.config.apiListAllIngredients,
      (response) => response.meals.map(arr => ({
        label: arr.strIngredient
      })));
  }

  public getListAllCategories(): Observable<LabelData[]> {
    const key = 'getListAllCategories';
    return this.fetchCachedData<LabelData[], StrCategories>(key, this.config.apiListAllCategories,
      (response) => response.meals.map(arr => ({
        label: arr.strCategory
      })));
  }

  public getListAllAreas(): Observable<LabelData[]> {
    const key = "getListAllAreas";
    return this.fetchCachedData<LabelData[], StrAreas>(key, this.config.apiListAllAreas,
      (response) => response.meals.map(arr => ({
        label: arr.strArea
      })));
  }
}
