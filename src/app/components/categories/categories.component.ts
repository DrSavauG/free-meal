import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";
import { LabelData } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { FilterPipe } from "../../pipes/filter.pipe";
import * as fromListActions from "../../../store/actions/lists.actions";
import {
  selectAreas,
  selectCategories,
  selectIngredients,
} from "../../../store/selectors/products.selectors";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FilterPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //todo при загрузке страницы сразу все акшены загружаются
})
export class CategoriesComponent implements OnInit {
  public activePage: string | null = null;
  public filterLetter: string | null = null;
  public labelDataArray$: Observable<LabelData[] |null> | null = null;
  // protected labelDataArray$: Observable<LabelData[]> | null = null;
  protected readonly categories = [PageType.Categories, PageType.Areas, PageType.Ingredients] as const;
  private readonly pageTypeToMethodMap: Map<PageType, Observable<LabelData[] | null>> = new Map([
    [PageType.Areas, this.loadListAllAreas()],//
    [PageType.Categories, this.loadListAllCategories()],
    [PageType.Ingredients, this.loadListAllIngredients()]
  ]);

  private readonly activePageToCategory = new Map([
    [PageType.Areas, PageType.Area],
    [PageType.Categories, PageType.Category],
    [PageType.Ingredients, PageType.Ingredient],
  ]);

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              protected store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const pageType: PageType = segments[0].path as PageType;
      if(pageType) {
        this.activePage = pageType;
        if(this.pageTypeToMethodMap.has(pageType)){
          this.labelDataArray$ = this.pageTypeToMethodMap.get(pageType) ?? null;
          // todo подправить ттип
        }
      }
    });
  }

  protected goToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  protected searchByCategory(category: string): void {
    if(this.activePage) {
      const pageType = this.activePageToCategory.get(this.activePage as PageType) ?? null;
      if(pageType) {
        this.router.navigate([`/${pageType}`, category]);
      }
    }
  }

  protected filterByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.filterLetter = value;
  }

  private loadListAllAreas() {
    this.store.dispatch(fromListActions.loadAreas());
    return this.store.select(selectAreas);
  }
  private loadListAllCategories() {
    this.store.dispatch(fromListActions.loadCategory());
    return this.store.select(selectCategories);
  }
  private loadListAllIngredients() {
    this.store.dispatch(fromListActions.loadIngredients());
    return this.store.select(selectIngredients);
  }
}
