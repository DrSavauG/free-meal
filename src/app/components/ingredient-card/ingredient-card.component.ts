import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { ImageHandlingService } from "../../services/image-handling.service";

import { StrIngredient } from "../../models/mock-products";
import { environment } from "../../../environments/environment";
import { PageType } from "../../constants/enums";
import { loadRawIngredients } from "../../../store/actions/ingredients.actions";
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
  protected ingredient$: Observable<StrIngredient[]> | null = null;
  protected readonly urlImageIngredient: string = environment.urlImageIngredient;
  private nameIngredient: string | null = null;

  constructor(private imageHandlingService: ImageHandlingService,
              private route: ActivatedRoute,
              protected store: Store,
  ) {
  }

  public ngOnInit(): void {
    this.loadIngredients();
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  private loadIngredients(): void {
    this.nameIngredient = this.route.snapshot.params[PageType.Ingredient];
    if(this.nameIngredient) {
      this.store.dispatch(loadRawIngredients());
      this.ingredient$ = this.store.select(selectIngredientsByName(this.nameIngredient));
    }
  }

}
