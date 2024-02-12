import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";

@Component({
  selector: 'app-product-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-small.component.html',
  styleUrl: './product-small.component.scss',
  inputs:[ "product"],
})
export class ProductSmallComponent {
  product: Product | null = null;
  constructor(private imageHandlingService: ImageHandlingService) {
  }
  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }
}
