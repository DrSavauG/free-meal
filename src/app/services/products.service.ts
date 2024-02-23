import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import {
  Category,
  Categories,
  StrIngredient,
  StrIngredients,
  Product,
  Products, StrAreas, StrCategories, LabelData
} from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiItemIdUrl: string = environment.apiItemIdUrl;
  private readonly apiItemsLetterUrl: string = environment.apiItemsLetterUrl;
  private readonly apiUrlRandom: string = environment.apiUrlRandom;
  private readonly apiSearchByNameUrl: string = environment.apiSearchByNameUrl;
  private readonly apiSearchByCategory: string = environment.apiSearchByCategory;
  private readonly apiSearchByArea: string = environment.apiSearchByArea;
  private readonly apiSearchByIngredient: string = environment.apiSearchByIngredient;
  private readonly apiListAllIngredients: string = environment.apiListAllIngredients;
  private readonly apiListAllCategories: string = environment.apiListAllCategories;
  private readonly apiListAllAreas: string = environment.apiListAllAreas;


  constructor(private http: HttpClient) {
  }

  public getRandomItem(): Observable<Product> {
    return this.http.get<Products>(this.apiUrlRandom).pipe(
      map((response) => response.meals[0])
    );
  }

  public getItemById(idMeals: string): Observable<Product[]> {
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

  public getByCategory(category: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByCategory}${category}`;
    return this.http.get<Categories>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getByArea(category: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByArea}${category}`;
    return this.http.get<Categories>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getByIngredient(ingredient: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByIngredient}${ingredient}`;
    return this.http.get<Categories>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getListAllIngredients(): Observable<LabelData[]> {
    return this.http.get<StrIngredients>(this.apiListAllIngredients).pipe(
      map((response) => response.meals.map(arr=>({
        label:arr.strIngredient
      })))
    );
  }

  public getListAllCategories(): Observable<LabelData[]> {
    return this.http.get<StrCategories>(this.apiListAllCategories).pipe(
      map((response) => response.meals.map(arr=>({
        label:arr.strCategory
      })))
    );
  }
  public getRawListAllIngredients(): Observable<StrIngredient[]> {
    return this.http.get<StrIngredients>(this.apiListAllIngredients).pipe(
      map((response) => response.meals)
    );
  }
  public getListAllAreas(): Observable<LabelData[]> {
    return this.http.get<StrAreas>(this.apiListAllAreas).pipe(
      map((response) => response.meals.map(arr=>({
        label:arr.strArea
      })))
    );
  }

}

export class ProductsService {
}
