import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from "../../models/mock-products";
import { IngredientsInterface } from "../../models/ingredient.interface";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent implements OnInit {
  @Input() product: Product | null = null;
  ingredients: IngredientsInterface | null = null;
  private readonly urlImageIngredient: string = environment.urlImageIngredient;


  ngOnInit(): void {
    this.ingredients = this.createIngredients(this.product,this.urlImageIngredient);
  }

  private createIngredients(product: Product|null,urlImg:string): IngredientsInterface {
   const result = [];
    for (let i = 1; i < 21; i++) {
      if(product) {
        const strIngredient= 'strIngredient' + i as keyof Product;
        const strMeasure= 'strMeasure' + i as keyof Product;
        const ingredient = product[strIngredient];
        const measure = product[strMeasure];
        const srcSmall = `${urlImg}${ingredient}-Small.png`;
        if(ingredient !== "") {
          result.push({ingredient, measure, srcSmall});
        }
      }
    }
    return result;
  }
}
