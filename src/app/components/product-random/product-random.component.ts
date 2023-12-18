import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from "../../models/mock-products";
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../../services/products.service";
import { environment } from "../../../environments/environment";

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
  public placeholderImage: string = '../../../assets/images/404 3.png';
  private readonly apiUrlRandom: string = environment.apiUrlRandom;

  constructor(private httpService: HttpService) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(): void {
    this.productsArray$ = this.httpService.getHttpRequest(this.apiUrlRandom);
  }

  public handleImageError(event: Event): void {
    if(event.target instanceof HTMLImageElement) {
      event.target.src = this.placeholderImage;
    }
  }
}
