import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable, tap } from "rxjs";

import { Product, Products } from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiItemIdUrl: string = environment.apiItemIdUrl;
  private readonly apiItemsLetterUrl: string = environment.apiItemsLetterUrl;
  private readonly apiUrlRandom: string = environment.apiUrlRandom;

  constructor(private http: HttpClient) {
  }

  public getRandomData(): Observable<Product[]> {
    return this.http.get<Products>(this.apiUrlRandom).pipe(
      map((response) => response.meals),
      tap((response) => this.handleResponse(response))
    );
  }

  public getSearchData(idMeals: string): Observable<Product[]> {
    const getUrl: string = `${this.apiItemIdUrl}${idMeals}`;
    return this.http.get<Products>(getUrl).pipe(
      map((response) => response.meals),
      tap((response) => this.handleResponse(response))
    );
  }

  public searchByLetter(letter: string): Observable<Product[]> {
    const searchLetterUrl: string = `${this.apiItemsLetterUrl}${letter}`;
    return this.http.get<Products>(searchLetterUrl).pipe(
      map((response) => response.meals),
      tap((response) => this.handleResponse(response))
    );
  }

  private handleResponse(response: Product[]): void {
    response;
  }
}

export class ProductsService {
}
