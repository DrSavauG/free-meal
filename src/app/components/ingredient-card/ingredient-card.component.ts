import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { ImageHandlingService } from "../../services/image-handling.service";
import { HttpService } from "../../services/products.service";

import { StrIngredient } from "../../models/mock-products";
import { environment } from "../../../environments/environment";
import { PageType } from "../../constants/enums";
import { loadRawIngredients } from "../../../store/actions/lists.actions";
import { selectIngredientsByName } from "../../../store/selectors/products.selectors";

@Component({
  selector: 'app-ingredient-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ingredient-card.component.html',
  styleUrl: './ingredient-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class IngredientCardComponent implements OnInit {
  public ingredient$: Observable<StrIngredient[]> | null = null;
  public readonly urlImageIngredient: string = environment.urlImageIngredient;
  private nameIngredient: string | null = null;
  // private ingredientArray$: Observable<StrIngredient[] | null> = this.store.select(selectRawIngredients);
  // protected ingredientArray$: Observable<StrIngredient[]> |null = null;
  private readonly keyOfStrIngredient: keyof StrIngredient = "strIngredient";

  constructor(private imageHandlingService: ImageHandlingService,
              private route: ActivatedRoute,
              private httpService: HttpService,
              protected store: Store,
  ) {
  }

  public ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.nameIngredient = this.route.snapshot.params[PageType.Ingredient];
    if(this.nameIngredient) {
      this.store.dispatch(loadRawIngredients());
      this.ingredient$ = this.store.select(selectIngredientsByName, {name: this.nameIngredient});
    }
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  // private getIngredient(name: string): Observable<StrIngredient[]> | null {
  //   if(this.ingredientArray$) {
  //     const capitalizeName = this.capitalizeFirstLetter(name);
  //     return this.ingredientArray$.pipe(
  //       map(ingredients => ingredients ? ingredients.filter(//TS18047: ingredients is possibly null
  //         ingredient => ingredient[this.keyOfStrIngredient] === capitalizeName) : []),
  //     );
  //   }
  //   return null;
  // }

  // private capitalizeFirstLetter(str: string): string {
  //   return str.replace(/^\w/, (match) => match.toUpperCase());
  // }

}
