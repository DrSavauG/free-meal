import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from "../../models/mock-products";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  inputs: ['product']
})

export class ProductCardComponent {
   product: Product;
}
