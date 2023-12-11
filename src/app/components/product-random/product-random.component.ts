import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from "../../models/mock-products";
import { Router, RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../../services/products.service";

@Component({
  selector: 'app-product-random',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-random.component.html',
  styleUrl: './product-random.component.scss'
})



export class ProductRandomComponent implements OnInit{
  public productsArray$: Observable<Product[]> | null = null;
  constructor(private httpService: HttpService,private router: Router) {
  }

  public ngOnInit(): void {
    this.loadProducts();
  }
  public loadProducts(): void {
    this.productsArray$ = this.httpService.getRandomData();
  }
}
