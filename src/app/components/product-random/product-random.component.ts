import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from "@angular/router";


import { HttpService } from "../../services/products.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";

@Component({
  selector: 'app-product-random',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './product-random.component.html',
  styleUrl: './product-random.component.scss',
})

export class ProductRandomComponent implements OnInit {
  public product: Product | null = null;
  protected readonly PageType = PageType;

  constructor(private httpService: HttpService,
              private imageHandlingService: ImageHandlingService,
              private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.loadProduct();
  }

  public loadProduct(): void {
    this.httpService.getRandomItem().subscribe(
      product => this.product = product
    );
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByCategory(): void {
    this.router.navigate([`/${PageType.Category}`, this.product?.strCategory]);
  }

  protected searchByArea(): void {
    this.router.navigate([`/${PageType.Area}`, this.product?.strArea]);
  }


}
