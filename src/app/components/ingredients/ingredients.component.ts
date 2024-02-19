import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { IngredientCard} from "../../models/mock-products";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent implements OnInit{
  public categories = ['categories', 'areas', 'ingredients'];

  public productsArray$: Observable< IngredientCard[]> | null = null;

  constructor(private httpService: HttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadIngredient();

  }

  private loadIngredient() {
    this.productsArray$ = this.httpService.getListAllIngredients();
  }

  public goToCategory(category: string) {
    this.router.navigate([`/${category}`]);
  }

  protected searchByIngredient(ingredient: string): void {
    this.router.navigate(['/ingredient', ingredient]);
  }
}
