import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Product } from "../../models/mock-products";

import { HttpService } from "../../services/products.service";
import { map, Observable, of, switchMap } from "rxjs";
import { ProductSmallComponent } from "../product-small/product-small.component";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule, ProductSmallComponent],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Product[]> | null = null;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }
  public  loadProducts(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params['letter']),
      switchMap((letter) => (letter ? this.httpService.searchByLetter(letter) : of([])))
    );
  }

}
