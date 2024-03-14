import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

import { ImageHandlingService } from "../../services/image-handling.service";

import { Category, Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";

@Component({
  selector: 'app-product-small',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './product-small.component.html',
  styleUrl: './product-small.component.scss',
})

export class ProductSmallComponent {
  @Input() product: Product | Category | null = null;
  private readonly strCategory: keyof Product = 'strCategory' as const;

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router) {
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByCategory(): void {
    if(this.product && this.isProduct(this.product)) {
      this.router.navigate([`/${PageType.Category}`, this.product.strCategory]);
    }
  }

  protected searchByArea(): void {
    if(this.product && this.isProduct(this.product)) {
      this.router.navigate([`/${PageType.Area}`, this.product.strArea]);
    }
  }

  protected isProduct(entity: Category | Product): entity is Product {
    return this.strCategory in entity;
  }

  protected readonly PageType = PageType;
}
