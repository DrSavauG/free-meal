import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Product } from "../../models/mock-products";

import { HttpService } from "../../services/products.service";
import { map, Observable, of, switchMap } from "rxjs";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent implements OnInit {
  public productsArray$: Observable<Product[]> | null = null;
  public placeholderImage:string = '../../../assets/images/404 3.png';


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.productsArray$ = this.route.params.pipe(
      map((params) => params['letter']),
      switchMap((letter) => (letter ? this.httpService.getLetterSearchData(letter) : of([])))
    );
  }

}
