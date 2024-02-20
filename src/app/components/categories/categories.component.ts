import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { StrCategory } from "../../models/mock-products";
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
  public productsArray$: Observable<StrCategory[]> | null = null;
  public filterLetter: string | null = null;

  constructor(private httpService: HttpService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadStrCategories();
  }

  private loadStrCategories() {
    this.productsArray$ = this.httpService.getListAllCategories();
  }

  public goToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  protected searchByCategory(category: string): void {
    this.router.navigate(['/category', category]);
  }

  protected filterByLetter(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.filterLetter = value;
  }
}
