import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage, Location } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";

import { HttpService } from "../../services/products.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { getProductRandom } from "../../../store/actions/products.actions";

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
              private location: Location,
              protected store:Store,
  ) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      if(this.product) {
        this.router.navigateByUrl('/' + PageType.Item + '/' + this.product.idMeal);
      }
    }

    if(event.key === 'Escape') {
      this.location.back();
    }
    console.log('event.key', event.key);

  }

  public ngOnInit(): void {
    this.loadProduct();
  }

  public loadProduct(): void {
    this.store.dispatch(getProductRandom());
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
