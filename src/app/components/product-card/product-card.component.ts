import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from "@angular/router";

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";
import { FavoritesService } from "../../services/favorites.service";
import { PageType } from "../../constants/enums";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['product']
})

export class ProductCardComponent {
  product: Product | null = null;

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router,
              private favoritesService: FavoritesService) {
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByCategory(): void {
    this.router.navigate([`/${PageType.Category}`, this.product?.strCategory]);
  }

  protected searchByArea(): void {
    this.router.navigate([`/${PageType.Area}`, this.product?.strArea]);
  }

  protected toggleFavorite(): void {
    if(this.product) {
      const isFavoriteId = this.favoritesService.getFavoriteById(this.product.idMeal);
      isFavoriteId ?
        this.favoritesService.deleteFavorite(this.product.idMeal) :
        this.favoritesService.setFavorite(this.product);
    } else throw new Error('this.product === null');
  }
}
