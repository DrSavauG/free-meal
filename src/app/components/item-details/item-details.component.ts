import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from "../../models/mock-products";
import { IngredientsInterface } from "../../models/ingredient.interface";
import { environment } from "../../../environments/environment";
import { ConvertRecipeService } from "../../services/convert-recipe.service";

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
  private placeholderImage: string = '../../../assets/images/404 3.png';


  constructor(private ConvertRecipeService: ConvertRecipeService) {
  }

  ngOnInit(): void {
    this.ingredients = this.ConvertRecipeService.createArrOfIngredients(this.product, this.urlImageIngredient);
  }

}
