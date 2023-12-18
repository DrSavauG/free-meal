import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  product: Product;
  private placeholderImage: string = '../../../assets/images/404 3.png';
  public handleImageError(event: Event): void {
    if(event.target instanceof HTMLImageElement) {
      event.target.src = this.placeholderImage;
    }
  }
}
