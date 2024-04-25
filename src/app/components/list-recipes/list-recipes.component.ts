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
import { selectListOfCategories, selectListOfMeals } from "../../../store/selectors/products.selectors";

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

  //todo layouts - для страниц
  // в папке layouts:
  //  - main - главная страница
  // - list - список рецептов
  // - description - подробности о рецепте

  protected isLoadIngredient: boolean = false;
//todo типы
  // @ts-ignore
  private readonly pageTypeToMethodMap: Map<PageType, (arg: string) => Observable<Category[]>> = new Map([
    [PageType.Area, (pageCategory: string) => this.loadListByArea(pageCategory)],
    [PageType.Category, (pageCategory: string) => this.loadListByCategory(pageCategory)],
    [PageType.Ingredient, (pageCategory: string) => this.loadListByIngredient(pageCategory)],
    [PageType.Favorites, () => of(this.favoritesService.getAllFavorites())],
    [PageType.Items, () => this.loadItemsByLetters()],
  ]);

  constructor(private httpService: HttpService,//todo delete
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

  private loadItemsByLetters(): Observable<Product[]|null> {

    return this.route.params.pipe(
      map((params) => params[PageType.Items]),
      switchMap((searchItems) => {
        if(searchItems.length > 1) {
          // return this.httpService.getSearchByName(searchItems);//todo добавить
          this.store.dispatch(fromListActions.loadMealsByName({name:searchItems}));
          return this.store.select(selectListOfMeals);
        } else if(searchItems.length == 1) {
          // selector+
          // action 3enum+
          // action 3 function+
          //reduce+
          // effect+
          this.store.dispatch(fromListActions.loadMealsByLetter({letter: searchItems}));
          return this.store.select(selectListOfMeals);
          // return this.httpService.getSearchByLetter(searchItems)
        } else {
          return [];
        }
      })
    );
  }

  private loadListByArea(pageCategory: string) {
    this.store.dispatch(fromListActions.loadListByArea({category:pageCategory}));
    return this.store.select(selectListOfCategories);
  }

  private loadListByCategory(pageCategory: string) {
    this.store.dispatch(fromListActions.loadListByCategory({category:pageCategory}));
    return this.store.select(selectListOfCategories);
  }

  private loadListByIngredient(pageCategory: string) {
    this.isLoadIngredient = true;
    this.store.dispatch(fromListActions.loadListByIngredient({category:pageCategory}));
    return this.store.select(selectListOfCategories);
  }
}
