import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";

@Component({
  selector: 'app-product-random',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-random.component.html',
  styleUrl: './product-random.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductRandomComponent implements OnInit {
  public productsArray$: Observable<Product[]> | null = null;

  constructor(private httpService: HttpService,
              private imageHandlingService: ImageHandlingService) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(): void {
    this.productsArray$ = this.httpService.getRandomData();
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }
}
