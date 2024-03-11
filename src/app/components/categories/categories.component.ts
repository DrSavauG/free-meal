import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { LabelData } from "../../models/mock-products";
import { PageType } from "../../enums/enums";
import { FilterPipe } from "../../pipes/filter.pipe";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FilterPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  public categories = ['categories', 'areas', 'ingredients'];
  public activePage: string | null = null;
  public labelDataArray$: Observable<LabelData[]> | null = null;
  public filterLetter: string | null = null;

  constructor(private httpService: HttpService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      switch (segments[0].path) {
        case PageType.Areas:
          this.loadStrAreas();
          break;
        case PageType.Categories:
          this.loadStrCategories();
          break;
        case PageType.Ingredients:
          this.loadStrIngredients();
          break;
      }
    });
  }

  private loadStrCategories() {
    this.activePage = PageType.Category;
    this.labelDataArray$ = this.httpService.getListAllCategories();
  }

  private loadStrAreas() {
    this.activePage = PageType.Area;
    this.labelDataArray$ = this.httpService.getListAllAreas();
  }

  private loadStrIngredients() {
    this.activePage = PageType.Ingredient;
    this.labelDataArray$ = this.httpService.getListAllIngredients();
  }

  protected goToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  protected searchByCategory(category: string): void {
    this.router.navigate([`/${this.activePage}`, category]);
  }

  protected filterByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.filterLetter = value;
  }
}
