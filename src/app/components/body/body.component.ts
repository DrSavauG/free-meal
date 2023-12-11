import { Component, OnInit } from "@angular/core";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { Router, RouterLink } from "@angular/router";

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
    NgClass,
    RouterLink
  ]
})

export class BodyComponent implements OnInit{
  public productsArray : Product[] = [];

  constructor(private httpService: HttpService,private router: Router) {
  }

  public ngOnInit(): void {
    this.httpService.getRandomData().subscribe(data=>this.productsArray = data
    );
  }

  public redirectToBigBody(idMeal: string):void {
    this.router.navigate(['/item',idMeal]);
  }
}
