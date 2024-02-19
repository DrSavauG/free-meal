import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import {
  Category,
  Categoryes,
  IngredientCard,
  IngredientsCards,
  Product,
  Products, StrArea, StrAreas, StrCategories, StrCategory
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

  public getByCategory(category: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByCategory}${category}`;
    return this.http.get<Categoryes>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getByArea(category: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByArea}${category}`;
    return this.http.get<Categoryes>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getByIngredient(ingredient: string): Observable<Category[]> {
    const searchUrl: string = `${this.apiSearchByIngredient}${ingredient}`;
    return this.http.get<Categoryes>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getListAllIngredients(): Observable<IngredientCard[]> {
    const searchUrl: string = `${this.apiListAllIngredients}`;
    return this.http.get<IngredientsCards>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getListAllCategories(): Observable<StrCategory[]> {
    const searchUrl: string = `${this.apiListAllCategories}`;
    return this.http.get<StrCategories>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

  public getListAllAreas(): Observable<StrArea[]> {
    const searchUrl: string = `${this.apiListAllCategories}`;
    return this.http.get<StrAreas>(searchUrl).pipe(
      map((response) => response.meals)
    );
  }

}

export class ProductsService {
}
