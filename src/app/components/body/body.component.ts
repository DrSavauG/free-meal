import { Component, OnInit } from "@angular/core";
import { NgClass, NgForOf, NgIf } from "@angular/common";

import { Observable } from "rxjs";

import { HttpService } from "../../services/products.service";
import { Product } from "../../models/mock-products";

@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  standalone: true,
  providers: [HttpService],

  imports: [
    NgForOf,
    NgIf,
    NgClass
  ]
})

export class BodyComponent implements OnInit{
  public isShowMore: boolean = false;
  public products$: Observable<Product[]> = this.httpService.products$;
  public productsArray : Product[] = [];

  constructor(private httpService: HttpService) {
  }

  public ngOnInit(): void {
    this.httpService.getRandomData().subscribe(data=>this.productsArray = data
    );
  }
}
