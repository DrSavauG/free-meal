import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { LabelData } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { FilterPipe } from "../../pipes/filter.pipe";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FilterPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  public activePage: string | null = null;
  public labelDataArray$: Observable<LabelData[]> | null = null;
  public filterLetter: string | null = null;
  protected readonly categories = [PageType.Categories, PageType.Areas, PageType.Ingredients];

  private readonly pageTypeToMethodMap: Map<PageType, Observable<LabelData[]>> = new Map([
    [PageType.Areas, this.httpService.getListAllAreas()],
    [PageType.Categories, this.httpService.getListAllCategories()],
    [PageType.Ingredients, this.httpService.getListAllIngredients()]
  ]);

  private readonly activePageToCategory = new Map([
    [PageType.Areas, PageType.Area],
    [PageType.Categories, PageType.Category],
    [PageType.Ingredients, PageType.Ingredient],
  ]);

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const pageType: PageType = segments[0].path as PageType;
      if(pageType) {
        this.activePage = pageType;
        this.labelDataArray$ = this.pageTypeToMethodMap.get(pageType) ?? null;
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
}
