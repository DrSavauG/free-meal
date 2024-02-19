import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { map, Observable, switchMap } from "rxjs";

import { HttpService } from "../../services/products.service";

import { IngredientCard, StrArea, StrCategory } from "../../models/mock-products";

enum PageType {
  Area = 'area',
  Categories = 'categories',
  Ingredient = 'ingredients',
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  public categories = ['categories', 'area', 'ingredients'];
  public productsArray$: Observable<StrCategory[] | StrArea[] | IngredientCard[]> | null = null;

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      console.log('segments[0].path', segments[0].path);

      switch (segments[0].path) {
        case PageType.Area:
          this.loadStrAreas();
          break;
        case PageType.Categories:
          this.loadStrCategories();
          break;
        case PageType.Ingredient:
          console.log('aaaa', 11111);

          this.loadIngredient();
          break;
      }
    });
  }


  private loadStrCategories() {
    this.productsArray$ = this.httpService.getListAllCategories();
  }

  private loadStrAreas() {
    this.productsArray$ = this.httpService.getListAllAreas();
  }

  private loadIngredient() {
    this.productsArray$ = this.httpService.getListAllIngredients();
  }
}
