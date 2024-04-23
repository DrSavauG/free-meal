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
import { Store } from "@ngrx/store";
import * as fromListActions from "../../../store/actions/lists.actions";
import { selectListOfCategories } from "../../../store/selectors/products.selectors";


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
    [PageType.Area, (pageCategory: string) => this.loadListByArea(pageCategory)],
    [PageType.Category, (pageCategory: string) => this.loadListByCategory(pageCategory)],
    [PageType.Ingredient, (pageCategory: string) => this.loadListByIngredient(pageCategory)],
    [PageType.Favorites, () => of(this.favoritesService.getAllFavorites())],
    [PageType.Items, () => this.loadItems()],
  ]);

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private favoritesService: FavoritesService,
              private store:Store,
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

  private loadListByArea(pageCategory: string) {
    return this.httpService.getByArea(pageCategory);
    // this.store.dispatch(fromListActions.loadListByArea({category:pageCategory}))
    // return this.store.select(selectListOfCategories)
  }

  private loadListByCategory(pageCategory: string) {
    return this.httpService.getByCategory(pageCategory);
    // this.store.dispatch(fromListActions.loadListByArea({category:pageCategory}))
    // return this.store.select(selectListOfCategories)
  }

  private loadListByIngredient(pageCategory: string) {
    this.isLoadIngredient = true;
    return this.httpService.getByIngredient(pageCategory);
    // this.store.dispatch(fromListActions.loadListByArea({category:pageCategory}))
    // return this.store.select(selectListOfCategories)
  }
}
