import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";

@Component({
  selector: 'app-product-small',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-small.component.html',
  styleUrl: './product-small.component.scss',
  inputs: ["product"],
})

export class ProductSmallComponent {
  product: Product | null = null;

  constructor(private imageHandlingService: ImageHandlingService) {
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  public get getWidth(): number {
    return 300;
  }

  public get getHeight(): number {
    return 300;
  }
}
