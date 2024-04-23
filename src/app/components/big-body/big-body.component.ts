import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";


import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { Product } from "../../models/mock-products";
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { PageType } from "../../constants/enums";
import * as fromProductsActions from "../../../store/actions/products.actions";
import { selectProduct } from "../../../store/selectors/products.selectors";


@Component({
  selector: 'app-big-body',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductSmallComponent, ItemDetailsComponent],
  templateUrl: './big-body.component.html',
  styleUrl: './big-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, //todo пока убрал а то не обновляет
})

export class BigBodyComponent implements OnInit {
  // public product$: Observable<Product[]> | null = null;
  // public product: Product | null = null;
  protected product$: Observable<Product | null> = this.store.select(selectProduct);



  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              protected store: Store,
  ) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    const idMeal: string = this.route.snapshot.params[PageType.Id];
    if(idMeal) {
      //todo add get from state/cash проверить есть ли уже
      this.store.dispatch(fromProductsActions.loadProductById({id: idMeal}));
    }
  }
}
