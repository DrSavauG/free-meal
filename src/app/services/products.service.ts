import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product, Products } from "../models/mock-products";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly URL: string = environment.URL;
    private readonly apiUrlRandom: string = environment.apiUrlRandom;

    constructor(private http: HttpClient) {
    }

    getRandomData(): Observable<Product[]> {
        return this.http.get<Products>(this.apiUrlRandom).pipe(map((response) => response.meals));
    }

    getSearchData(search: string): Observable<Product[]> {
        const getUrl = `${this.URL}${search}`;
        return this.http.get<Products>(getUrl).pipe(map((response) => response.meals));
    }
}

export class ProductsServiceService {
}
