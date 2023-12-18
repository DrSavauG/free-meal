import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from "../../models/mock-products";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['product']
})

export class ProductCardComponent {
  private placeholderImage: string = '../../../assets/images/404 3.png';
  product: Product | null = null;

  public handleImageError(event: Event): void {
    if(event.target instanceof HTMLImageElement) {
      event.target.src = this.placeholderImage;
    }
  }

}
