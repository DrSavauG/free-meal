import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { map, Observable, switchMap } from "rxjs";

import { Category, Product } from "../../models/mock-products";
import { HttpService } from "../../services/products.service";

import { ProductSmallComponent } from "../product-small/product-small.component";

enum PageType {
  Area = 'area',
  Category = 'category',
  Ingredient = 'ingredient',
  Items = 'items',
}

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Category[] | Product[]> | null = null;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const key = segments[0].path;
      switch (key) {
        case PageType.Area:
          this.loadAreas();
          break;
        case PageType.Category:
          this.loadCategories();
          break;
        case PageType.Ingredient:
          this.loadIngredient();
          break;
        case PageType.Items:
          this.loadItems();
          break;
      }
    });
  }

  public loadCategories(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params[PageType.Category]),
      switchMap((category) => this.httpService.getByCategory(category)));
  }

  public loadAreas(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params[PageType.Area]),
      switchMap((area) => this.httpService.getByArea(area)));
  }

  public loadIngredient(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params[PageType.Ingredient]),
      switchMap((ingredient) => this.httpService.getByIngredient(ingredient)));
  }

  public loadItems(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params[PageType.Items]),
      switchMap((items) => {
        if(items.length > 1) {
          return this.httpService.getSearchByName(items);
        } else if(items.length == 1) {
          return this.httpService.searchByLetter(items);
        } else {
          return this.httpService.getRandomData();
        }
      })
    );
  }
}
