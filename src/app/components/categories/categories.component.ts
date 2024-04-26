import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable, Subject, takeUntil } from "rxjs";

import { LabelData } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { FilterPipe } from "../../pipes/filter.pipe";
import * as fromListActions from "../../../store/actions/lists.actions";
import * as fromProductsSelectors from "../../../store/selectors/products.selectors";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FilterPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CategoriesComponent implements OnInit, OnDestroy {
  protected filterLetter: string | null = null;
  protected labelDataArray$: Observable<LabelData[] | null> | null = null;
  protected readonly categories = [PageType.Categories, PageType.Areas, PageType.Ingredients] as const;

  private destroy$ = new Subject<void>();
  private activePage: string | null = null;

  private readonly pageTypeToMethodMap: Map<PageType, () => Observable<LabelData[] | null>> = new Map([
    [PageType.Areas, this.loadAreas.bind(this)],//
    [PageType.Categories, this.loadCategories.bind(this)],
    [PageType.Ingredients, this.loadIngredients.bind(this)]
  ]);

  private readonly activePageToCategory = new Map([
    [PageType.Areas, PageType.Area],
    [PageType.Categories, PageType.Category],
    [PageType.Ingredients, PageType.Ingredient],
  ]);

  constructor(private router: Router,
              private route: ActivatedRoute,
              protected store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.url.pipe(takeUntil(this.destroy$)).subscribe(segments => {
      const pageType: PageType = segments[0].path as PageType;
      this.handlePageTypeChange(pageType);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected goToCategory(category: string) {
    this.router.navigate([`/${category}`])
      .catch(error => {
        console.error('Navigation error:', category, '=>', error);
      });
  }

  protected searchByCategory(category: string): void {
    if(!this.activePage) {
      console.warn('Attempted to navigate without an active page.');
      return;
    }

    const pageType = this.activePageToCategory.get(this.activePage as PageType) ?? null;
    if(!pageType) {
      console.error('Invalid active page for navigation:', this.activePage);
      return;
    }
    this.router.navigate([`/${pageType}`, category])
      .catch(error => {
        console.error('Navigation error:', pageType, category, '=>', error);
      });
  }

  protected filterByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.filterLetter = value;
  }

  private handlePageTypeChange(pageType: PageType): void {
    if(!pageType) {
      console.error(`Недопустимый или отсутствующий PageType: ${pageType}`);
      return;
    }
    this.activePage = pageType;
    const loadDataFunction = this.pageTypeToMethodMap.get(pageType);
    if(loadDataFunction) {
      this.labelDataArray$ = loadDataFunction() ?? null;
    } else {
      console.error(`loadDataFunction не найдена для PageType: ${pageType}`);
    }
  }

  private loadAreas() {
    this.store.dispatch(fromListActions.loadAreas());
    return this.store.select(fromProductsSelectors.selectAreas);
  }

  private loadCategories() {
    this.store.dispatch(fromListActions.loadCategory());
    return this.store.select(fromProductsSelectors.selectCategories);
  }

  private loadIngredients() {
    this.store.dispatch(fromListActions.loadIngredients());
    return this.store.select(fromProductsSelectors.selectIngredients);
  }
}
