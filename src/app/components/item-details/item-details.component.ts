import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ConvertRecipeService } from "../../services/convert-recipe.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { environment } from "../../../environments/environment";
import { Product, ProductRecipe } from "../../models/mock-products";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent implements OnInit {
  @Input() product: Product | null = null;
  public productRecipe: ProductRecipe | null = null;
  public readonly urlImageIngredient: string = environment.urlImageIngredient;

  constructor(private convertRecipeService: ConvertRecipeService,
              private imageHandlingService: ImageHandlingService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productRecipe = this.convertRecipeService.createArrOfIngredients(this.product);
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByingredient(ingredient: string): void {
    this.router.navigate(['/ingredient', ingredient]);
  }

}
