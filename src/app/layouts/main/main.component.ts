import { Component, DestroyRef, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage, Location } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { ImageHandlingService } from "../../services/image-handling.service";
import { Product } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { loadProductRandom } from "../../../store/actions/products.actions";
import { selectProduct } from "../../../store/selectors/products.selectors";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent implements OnInit {
  public product: Product | null = null;
  protected readonly PageType = PageType;
  protected product$: Observable<Product | null> = this.store.select(selectProduct);

  constructor(private imageHandlingService: ImageHandlingService,
              private router: Router,
              private location: Location,
              protected store: Store,
              private destroy$: DestroyRef
  ) {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        this.navigateToDescription();
        break;
      case 'Escape':
        this.location.back();
        break;
    }
  }

  private navigateToDescription() {
    this.router.navigateByUrl('/' + PageType.Item + '/' + this.product?.idMeal)
      .catch(error => console.error('Navigation error:', error));
  }

  public ngOnInit(): void {
    this.loadProduct();
  }

  public loadProduct(): void {
    this.store.dispatch(loadProductRandom());
    this.product$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(product => {
      //subscription нужно для работы router.navigate чтобы вызывалосизнутри компонента
      this.product = product;
    });
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
}
