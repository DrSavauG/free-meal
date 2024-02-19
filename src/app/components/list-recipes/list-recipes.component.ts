import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { map, Observable, of, switchMap } from "rxjs";

import { HttpService } from "../../services/products.service";

import { Category, Product } from "../../models/mock-products";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { FavoritesService } from "../../services/favorites.service";
import { ProductCardComponent } from "../product-card/product-card.component";
import { IngredientCardComponent } from "../ingredient-card/ingredient-card.component";

enum PageType {
  Area = 'area',
  Category = 'category',
  Ingredient = 'ingredient',
  Items = 'items',
  Favorites = 'favorites',
}

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent, ProductCardComponent, IngredientCardComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Category[] | Product[]> | null = null;
  protected isLoadIngredient: boolean = false;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private favoritesService: FavoritesService,
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      switch (segments[0].path) {
        case PageType.Area:
          this.loadAreas();
          break;
        case PageType.Category:
          this.loadCategories();
          break;
        case PageType.Ingredient: {
          this.isLoadIngredient = true;
          this.loadIngredient();
        }
          break;
        case PageType.Items:
          this.loadItems();
          break;
        case PageType.Favorites:
          this.loadFavoritesItems();
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
          return [];
        }
      })
    );
  }

  private loadFavoritesItems() {
    this.productsArray$ = of(this.favoritesService.getAllFavorites());
  }
}
