import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from "@angular/router";

import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { ImageHandlingService } from "../../services/image-handling.service";
import { Product } from "../../models/mock-products";
import { FavoritesService } from "../../services/favorites.service";
import { PageType } from "../../constants/enums";
import * as fromFavoritesActions from "../../../store/actions/favorites.actions";
import { selectProduct } from "../../../store/selectors/products.selectors";

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProductCardComponent implements OnInit {

  protected product$: Observable<Product | null> = this.store.select(selectProduct);

  public product: Product | null = null;
  public message: string | null = null;
  public displayFadeOut: boolean = false;

  protected displayMessage: boolean = false;

  private timerShowMessage: ReturnType<typeof setTimeout> | undefined;
  private timerCloseMessage: ReturnType<typeof setTimeout> | undefined;
  private timer = 500 as const;

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router,
              private favoritesService: FavoritesService,
              private cdr: ChangeDetectorRef,
              private store: Store,
              private destroy$: DestroyRef
              ) {
  }

  ngOnInit(): void {
    this.loadProduct();
    }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  protected searchByCategory(): void {
    this.router.navigate([`/${PageType.Category}`, this.product?.strCategory])
      .catch(error => console.error('Navigation error:', error));
  }

  protected searchByArea(): void {
    this.router.navigate([`/${PageType.Area}`, this.product?.strArea])
      .catch(error => console.error('Navigation error:', error));
  }

  protected toggleFavorite(): void {
    if(this.product) {
      const isFavoriteId = this.favoritesService.getFavoriteById(this.product.idMeal);
      isFavoriteId ?
        this.deleteFavorite(this.product.idMeal) :
        this.setFavorite(this.product);
    } else throw new Error(Error.name);
  }

  private showMessage(arg: string) {
    this.displayMessage = true;
    this.displayFadeOut = false;
    this.message = arg;

    clearTimeout(this.timerShowMessage);
    clearTimeout(this.timerCloseMessage);

    this.timerShowMessage = setTimeout(() => {
      this.displayFadeOut = true;
      this.cdr.detectChanges();
    }, this.timer);

    this.closeMessage(this.timer);
  }

  private closeMessage(timer: number) {
    const doubleTimer = timer * 2;
    this.timerCloseMessage = setTimeout(() => {
      this.displayMessage = false;
      this.displayFadeOut = false;
      this.cdr.detectChanges();
    }, doubleTimer);
  }

  private deleteFavorite(idMeal: string) {
    this.store.dispatch(fromFavoritesActions.deleteFromFavorites({id: idMeal}));
    this.showMessage(`delete  ${this.product?.strMeal} from favorite`);
  }

  private setFavorite(product: Product) {
    this.store.dispatch(fromFavoritesActions.addToFavorites({product}));
    this.showMessage(`add ${this.product?.strMeal} to favorite`);
  }

  private loadProduct() {
    this.product$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(product => {
      //subscription нужно для работы router.navigate чтобы вызывалосизнутри компонента
      this.product = product;
    });
  }
}
