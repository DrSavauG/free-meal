import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product, Products } from "../models/mock-products";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiUrl:string = environment.apiUrl;
  private readonly apiUrlRandom:string = environment.apiUrlRandom;

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Product[]> {
    return this.http.get<Products>(this.apiUrlRandom).pipe(map((response) => response.meals));
  }
}

export class ProductsServiceService {
}
