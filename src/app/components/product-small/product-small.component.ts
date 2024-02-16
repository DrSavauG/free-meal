import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-small',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
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

}
