import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";

import { Product } from "../../models/mock-products";
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { ItemDetailsComponent } from "../item-details/item-details.component";
import { PageType } from "../../constants/enums";


@Component({
  selector: 'app-big-body',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductSmallComponent, ItemDetailsComponent],
  templateUrl: './big-body.component.html',
  styleUrl: './big-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BigBodyComponent implements OnInit {
  public productsArray$: Observable<Product[]> | null = null;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    const idMeal: string = this.route.snapshot.params[PageType.Id];
    if(idMeal) {
      this.productsArray$ = this.httpService.getItemById(idMeal);
    }
  }
}
