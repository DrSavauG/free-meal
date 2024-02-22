import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from "@angular/router";

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";
import { FavoritesService } from "../../services/favorites.service";

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

  protected searchByCategory(category: string): void {
    this.router.navigate(['/category', category]);
  }

  protected searchByArea(area: string): void {
    this.router.navigate(['/area', area]);
  }

  protected toggleFavorite(product: Product): void {

    this.favoritesService.getAllFavorites();
    const isFavoriteId = this.favoritesService.getFavoriteById(product.idMeal);
    isFavoriteId ?
      this.favoritesService.deleteFavorite(product.idMeal) :
      this.favoritesService.setFavorite(product);
  }
}
