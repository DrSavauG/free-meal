import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { Product, Products } from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private readonly apiUrlRandom:string = environment.apiUrlRandom;
  constructor(private http: HttpClient) {
  }

  public getData(): Observable<Product[]> {
    return this.http.get<Products>(this.apiUrlRandom).pipe(map((response) => response.meals));
  }
}

export class ProductsServiceService {
}
