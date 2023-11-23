import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product, Products } from "../models/mock-products";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getData(url: string): Observable<Product[]> {
    return this.http.get<Products>(url).pipe(map((response) => response.meals));
  }
}

export class ProductsServiceService {
}
