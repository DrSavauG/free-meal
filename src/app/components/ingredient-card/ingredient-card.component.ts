import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { map, Observable } from "rxjs";

import { ImageHandlingService } from "../../services/image-handling.service";
import { HttpService } from "../../services/products.service";

import { StrIngredient } from "../../models/mock-products";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class IngredientCardComponent implements OnInit {
  public ingredients$: Observable<StrIngredient[]> | null = null;
  public readonly urlImageIngredient: string = environment.urlImageIngredient;
  protected nameIngredient: string | null = null;
  private ingredientArray$: Observable<StrIngredient[]> | null = null;

  constructor(private imageHandlingService: ImageHandlingService,
              private route: ActivatedRoute,
              private httpService: HttpService,
  ) {
  }

  public ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.nameIngredient = this.route.snapshot.params['ingredient'];
    if(this.nameIngredient) {
      this.ingredientArray$ = this.httpService.getRawListAllIngredients();
      this.getIngredient(this.nameIngredient);
    }
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  private getIngredient(name: string): void {
    if(this.ingredientArray$) {
      const capitalizeName = this.capitalizeFirstLetter(name);
      this.ingredients$ = this.ingredientArray$.pipe(
        map(ingredients => ingredients.filter(
          ingredient => ingredient["strIngredient"] === capitalizeName)),
      );
    }
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


}
