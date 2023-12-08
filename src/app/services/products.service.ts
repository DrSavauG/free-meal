import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, map, Observable, tap } from "rxjs";

import { Product, Products } from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly apiItemIdUrl: string = environment.apiItemIdUrl;
    private readonly apiItemsLetterUrl: string = environment.apiItemsLetterUrl;
    private readonly apiUrlRandom: string = environment.apiUrlRandom;
    private productsSubject = new BehaviorSubject<Product[]>([]);
    public products$: Observable<Product[]> = this.productsSubject.asObservable();

    constructor(private http: HttpClient) {
    }
    public getRandomData(): Observable<Product[]> {
        return this.http.get<Products>(this.apiUrlRandom).pipe(map((response) => response.meals)).pipe(
            tap((response) => {
                this.productsSubject.next(response);
            })
        );
    }

    public getSearchData(idMeals: string): Observable<Product[]> {
        const getUrl:string = `${this.apiItemIdUrl}${idMeals}`;
        return this.http.get<Products>(getUrl).pipe(map((response) => response.meals)).pipe(
            tap((response) => this.productsSubject.next(response))
        );
    }


  public getLetterSearchData(letter: string): Observable<Product[]> {
    const getLetterUrl:string = `${this.apiItemsLetterUrl}${letter}`;
    return this.http.get<Products>(getLetterUrl).pipe(map((response) => response.meals)).pipe(
      tap((response) => this.productsSubject.next(response))
    );
  }


}

export class ProductsService {
}
