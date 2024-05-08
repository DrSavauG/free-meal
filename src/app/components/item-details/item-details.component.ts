import { ChangeDetectionStrategy, Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ConvertRecipeService } from "../../services/convert-recipe.service";
import { ImageHandlingService } from "../../services/image-handling.service";

import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Product, ProductRecipe } from "../../models/mock-products";
import { PageType } from "../../constants/enums";
import { selectProduct } from "../../../store/selectors/products.selectors";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponent implements OnInit {
  protected product$: Observable<Product | null> = this.store.select(selectProduct);
  protected productRecipe: ProductRecipe | null = null;
  protected readonly urlImageIngredient: string = environment.urlImageIngredient;

  constructor(private convertRecipeService: ConvertRecipeService,
              private imageHandlingService: ImageHandlingService,
              private router: Router,
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

  protected searchByIngredient(ingredient: string): void {
    this.router.navigate([`/${PageType.Ingredient}`, ingredient])
      .catch(error => console.error('Navigation error:', error));
  }

  private loadProduct() {
    this.product$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(product => {
      //subscription нужно для работы router.navigate чтобы вызывалосизнутри компонента
      this.productRecipe = this.convertRecipeService.createArrOfIngredients(product);
    });
  }
}
