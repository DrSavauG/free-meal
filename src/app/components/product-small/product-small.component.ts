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
}
