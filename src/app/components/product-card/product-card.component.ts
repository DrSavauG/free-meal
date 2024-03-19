import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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
  public product: Product | null = null;
  public message: string | null = null;
  public displayFadeOut: boolean = false;

  protected displayMessage: boolean = false;

  private timerShowMessage: ReturnType<typeof setTimeout> | undefined;
  private timerCloseMessage: ReturnType<typeof setTimeout> | undefined;
  private timer = 500 as const;

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router,
              private favoritesService: FavoritesService,
              private cdr: ChangeDetectorRef) {
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
        this.deleteFavorite(this.product.idMeal) :
        this.setFavorite(this.product);
    } else throw new Error(Error.name);
  }

  private showMessage(arg: string) {
    this.displayMessage = true;
    this.displayFadeOut = false;
    this.message = arg;

    clearTimeout(this.timerShowMessage);
    clearTimeout(this.timerCloseMessage);

    this.timerShowMessage = setTimeout(() => {
      this.displayFadeOut = true;
      this.cdr.detectChanges();
    }, this.timer);

    this.closeMessage(this.timer);
  }

  private closeMessage(timer: number) {
    const doubleTimer = timer * 2;
    this.timerCloseMessage = setTimeout(() => {
      this.displayMessage = false;
      this.displayFadeOut = false;
      this.cdr.detectChanges();
    }, doubleTimer);
  }

  private deleteFavorite(idMeal: string) {
    this.favoritesService.deleteFavorite(idMeal);
    this.showMessage(`delete  ${this.product?.strMeal} from favorite`);
  }

  private setFavorite(product: Product) {
    this.favoritesService.setFavorite(product);
    this.showMessage(`add ${this.product?.strMeal} to favorite`);
  }

}
