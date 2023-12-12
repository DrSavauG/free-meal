import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Product } from "../../models/mock-products";

import { HttpService } from "../../services/products.service";

@Component({
  selector: 'list-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent implements OnInit {
  public productsArray: Product[] = [];

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    const letter: string = this.route.snapshot.params['letter'];
    if(letter) {
      this.httpService.getLetterSearchData(letter).subscribe(data => {
        this.productsArray = data;
      });
    }
  }

}
