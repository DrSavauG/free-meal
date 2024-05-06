import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { Product } from "../../models/mock-products";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProductSmallComponent } from "../../components/product-small/product-small.component";
import { ItemDetailsComponent } from "../../components/item-details/item-details.component";
import { PageType } from "../../constants/enums";
import * as fromProductsActions from "../../../store/actions/products.actions";
import { selectProduct } from "../../../store/selectors/products.selectors";

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductSmallComponent, ItemDetailsComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DescriptionComponent implements OnInit {
  protected product$: Observable<Product | null> = this.store.select(selectProduct);

  constructor(private route: ActivatedRoute,
              protected store: Store,
  ) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    const idMeal: string = this.route.snapshot.params[PageType.Id];
    if(idMeal) {
      this.store.dispatch(fromProductsActions.loadProductById({id: idMeal}));
    } else {
      console.error(`отсутствующий idMeal: ${idMeal}`);
    }
  }
}
