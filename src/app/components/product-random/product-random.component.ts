import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage, Location } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";

import { HttpService } from "../../services/products.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { Product, Products, StrIngredient } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { loadProductRandom } from "../../../store/actions/products.actions";
import { selectProduct } from "../../../store/selectors/products.selectors";
import { Observable, Subscription } from "rxjs";
import { ProductState } from "../../../store/reducers/products.reducers";

@Component({
  selector: 'app-product-random',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './product-random.component.html',
  styleUrl: './product-random.component.scss',
})

export class ProductRandomComponent implements OnInit, OnDestroy {
  public product: Product | null = null;
  protected readonly PageType = PageType;
  private productSubscription: Subscription | null = null;
  // private productSubscription: Subscription|null = null;
////////
  protected product$: Observable<Product | null> = this.store.select(selectProduct);

  constructor(private httpService: HttpService,
              private imageHandlingService: ImageHandlingService,
              private router: Router,
              private location: Location,
              protected store: Store,
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
    // console.log('event.key', event.key);
  }

  public ngOnInit(): void {
    this.loadProduct();
  }

  public ngOnDestroy(): void {
    if(this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  public loadProduct(): void {
    this.store.dispatch(loadProductRandom());
    this.productSubscription = this.product$.subscribe(product => {
      this.product = product;
    });
    // this.product$ = this.store.select(selectProduct);

    // this.store.select(selectProduct).subscribe(stateProductData => {
    //     this.product = stateProductData;
    //   }
    // );
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByCategory(): void {
    if(this.product) {

      this.router.navigate([`/${PageType.Category}`, this.product?.strCategory]);
    }
  }

  protected searchByArea(): void {
    if(this.product) {
      this.router.navigate([`/${PageType.Area}`, this.product?.strArea]);
    }
  }
}
