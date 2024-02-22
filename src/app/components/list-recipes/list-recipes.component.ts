import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { map, Observable, of, switchMap } from "rxjs";

import { HttpService } from "../../services/products.service";
import { FavoritesService } from "../../services/favorites.service";

import { Category, Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { IngredientCardComponent } from "../ingredient-card/ingredient-card.component";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent, ProductCardComponent, IngredientCardComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Category[]> | null = null;
  public pageCategory: string | null = null;
  public findCategory: string | null = null;
  protected isLoadIngredient: boolean = false;

  private readonly pageTypeToMethodMap: Map<PageType, (arg: string) => Observable<Category[]>> = new Map([
    [PageType.Area, (pageCategory: string) => this.httpService.getByArea(pageCategory)],
    [PageType.Category, (pageCategory: string) => this.httpService.getByCategory(pageCategory)],
    [PageType.Favorites, () => of(this.favoritesService.getAllFavorites())],
    [PageType.Items, () => this.loadItems()],
    [PageType.Ingredient, (pageCategory: string) => {
      this.isLoadIngredient = true;
      return this.httpService.getByIngredient(pageCategory);
    }],
  ]);

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private favoritesService: FavoritesService,
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.pageCategory = segments[0]?.path;
      this.findCategory = segments[1]?.path;
      if(this.pageTypeToMethodMap.has(<PageType>this.pageCategory)) {
        this.productsArray$ = this.pageTypeToMethodMap.get(<PageType>this.pageCategory)!(this.findCategory);
      }
    });
  }

  private loadItems(): Observable<Product[]> {
    return this.route.params.pipe(
      map((params) => params[PageType.Items]),
      switchMap((searchItems) => {
        if(searchItems.length > 1) {
          return this.httpService.getSearchByName(searchItems);
        } else if(searchItems.length == 1) {
          return this.httpService.searchByLetter(searchItems);
        } else {
          return [];
        }
      })
    );
  }
}
