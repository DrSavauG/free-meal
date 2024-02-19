import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from "rxjs";
import { IngredientCard, StrArea, StrCategory } from "../../models/mock-products";

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent implements OnInit{
  public productsArray$: Observable< IngredientCard[]> | null = null;

  ngOnInit(): void {
  }

}
