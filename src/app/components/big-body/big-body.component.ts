import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { HttpService } from "../../services/products.service";
import { Product } from "../../models/mock-products";
import { ProductCardComponent } from "../product-card/product-card.component";
import { Observable } from "rxjs";
import { ProductSmallComponent } from "../product-small/product-small.component";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-big-body',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductSmallComponent],
  templateUrl: './big-body.component.html',
  styleUrl: './big-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BigBodyComponent implements OnInit {
  public productsArray$: Observable<Product[]> | null = null;
  private readonly apiItemIdUrl: string = environment.apiItemIdUrl;


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }
  public ngOnInit(): void {
    this.loadProducts();
  }
  private loadProducts(): void {
    const idMeal:string = this.route.snapshot.params['id'];

    if(idMeal) {
      const getUrl: string = `${this.apiItemIdUrl}${idMeal}`;
    this.productsArray$ = this.httpService.getHttpRequest(getUrl);
    }
  }
}
