import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngrx/store";
import { map, Observable, of, switchMap } from "rxjs";

import { FavoritesService } from "../../services/favorites.service";

import { Category, Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { ProductSmallComponent } from "../../components/product-small/product-small.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { IngredientCardComponent } from "../../components/ingredient-card/ingredient-card.component";
import * as fromListActions from "../../../store/actions/lists.actions";
import {
  selectAllFavorites,
  selectListOfCategories,
  selectListOfMeals
} from "../../../store/selectors/products.selectors";
import * as fromFavoritesActions from "../../../store/actions/favorites.actions";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent, ProductCardComponent, IngredientCardComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Category[] | null> | null = null;
  public pageCategory: string | null = null;
  public findCategory: string | null = null;

  protected isLoadIngredient: boolean = false;
  private readonly pageTypeToMethodMap: Map<PageType, (arg: string) => Observable<Category[] | null>> = new Map([
    [PageType.Area, (pageCategory: string) => this.loadListByArea(pageCategory)],
    [PageType.Category, (pageCategory: string) => this.loadListByCategory(pageCategory)],
    [PageType.Ingredient, (pageCategory: string) => this.loadListByIngredient(pageCategory)],
    [PageType.Favorites, () => this.loadListFavorites()],
    [PageType.Items, () => this.loadItemsByLetters()],
  ]);

  constructor(private route: ActivatedRoute,
              private favoritesService: FavoritesService,
              private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct() {
    this.route.url.subscribe(segments => {
      this.pageCategory = segments[0]?.path;
      this.findCategory = segments[1]?.path;
      if(this.pageTypeToMethodMap.has(<PageType>this.pageCategory)) {
        this.productsArray$ = this.pageTypeToMethodMap.get(<PageType>this.pageCategory)!(this.findCategory);
      }
    });
  }

  private loadItemsByLetters(): Observable<Product[] | null> {
    return this.route.params.pipe(
      map((params) => params[PageType.Items]),
      switchMap((searchItems) => {
        if(searchItems.length > 1) {
          this.store.dispatch(fromListActions.loadMealsByName({name: searchItems}));
          return this.store.select(selectListOfMeals);
        } else if(searchItems.length == 1) {

          this.store.dispatch(fromListActions.loadMealsByLetter({letter: searchItems}));
          return this.store.select(selectListOfMeals);
        } else {
          return [];
        }
      })
    );
  }

  private loadListByArea(pageCategory: string) {
    this.store.dispatch(fromListActions.loadListByArea({category: pageCategory}));
    return this.store.select(selectListOfCategories);
  }

  private loadListByCategory(pageCategory: string) {
    this.store.dispatch(fromListActions.loadListByCategory({category: pageCategory}));
    return this.store.select(selectListOfCategories);
  }

  private loadListByIngredient(pageCategory: string) {
    this.isLoadIngredient = true;
    this.store.dispatch(fromListActions.loadListByIngredient({category: pageCategory}));
    return this.store.select(selectListOfCategories);
  }

  private loadListFavorites() {
    this.store.dispatch(fromFavoritesActions.loadAllFavorites());
    return this.store.select(selectAllFavorites);
  }

}
