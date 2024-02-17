import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

import { ImageHandlingService } from "../../services/image-handling.service";

import { Category, Product } from "../../models/mock-products";

@Component({
  selector: 'app-product-small',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './product-small.component.html',
  styleUrl: './product-small.component.scss',
})

export class ProductSmallComponent {
  @Input() product: Product | Category | null = null;

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router) {
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

  protected isProduct(entity: Category | Product): entity is Product {
    return 'strCategory' in entity;
  }

}
