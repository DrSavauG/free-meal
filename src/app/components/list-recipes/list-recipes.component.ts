import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Product } from "../../models/mock-products";

import { HttpService } from "../../services/products.service";
import { map, Observable, of, switchMap } from "rxjs";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent implements OnInit {
  private readonly apiItemsLetterUrl: string = environment.apiItemsLetterUrl;

  public productsArray$: Observable<Product[]> | null = null;
  public placeholderImage:string = '../../../assets/images/404 3.png';

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }
  public  loadProducts(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params['letter']),
      switchMap((letter) => (letter ? this.httpService.getHttpRequest(`${this.apiItemsLetterUrl}${letter}`) : of([])))
    );
  }

}
