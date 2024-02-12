import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";

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

  constructor(private imageHandlingService: ImageHandlingService) {
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  public get getWidth(): number {
    return 500;
  }
  public get getHeight(): number {
    return 500;
  }

}
