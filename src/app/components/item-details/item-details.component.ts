import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ConvertRecipeService } from "../../services/convert-recipe.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { environment } from "../../../environments/environment";
import { Product } from "../../models/mock-products";
import { IngredientsInterface } from "../../models/ingredient.interface";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent implements OnInit {
  @Input() product: Product | null = null;
  public ingredients: IngredientsInterface | null = null;
  private readonly urlImageIngredient: string = environment.urlImageIngredient;

  constructor(private convertRecipeService: ConvertRecipeService,
              private imageHandlingService: ImageHandlingService,
  ) {
  }

  ngOnInit(): void {
    this.ingredients = this.convertRecipeService.createArrOfIngredients(this.product, this.urlImageIngredient);
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }
}
