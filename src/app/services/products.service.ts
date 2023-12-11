import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable, tap } from "rxjs";

import { Product, Products } from "../models/mock-products";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  public getHttpRequest(url: string): Observable<Product[]> {
    return this.http.get<Products>(url).pipe(
      map((response) => response.meals)
    );
  }
}

export class ProductsService {
}
