import { Component, OnInit } from "@angular/core";
import { AsyncPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { Router, RouterLink } from "@angular/router";

import { HttpService } from "../../services/products.service";
import { Product } from "../../models/mock-products";
import { Observable } from "rxjs";

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true,
  providers: [HttpService],

  imports: [
    NgForOf,
    NgIf,
    NgClass,
    RouterLink,
    AsyncPipe
  ]
})

export class BodyComponent implements OnInit{
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
