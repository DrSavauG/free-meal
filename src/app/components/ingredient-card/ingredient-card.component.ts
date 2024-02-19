import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { ImageHandlingService } from "../../services/image-handling.service";
import { HttpService } from "../../services/products.service";

import { IngredientCard } from "../../models/mock-products";
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
  public ingredient: IngredientCard | null = null;
  protected nameIngredient: string | null = null;
  private ingredientArray$: Observable<IngredientCard[]> | null = null;
  public readonly urlImageIngredient: string = environment.urlImageIngredient;

  constructor(private imageHandlingService: ImageHandlingService,
              private route: ActivatedRoute,
              private httpService: HttpService,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.loadIngredients();
  }

  private loadIngredients(): void {
    this.nameIngredient = this.route.snapshot.params['ingredient'];
    if(this.nameIngredient) {
      this.ingredientArray$ = this.httpService.getListAllIngredients();
      this.getIngredient(this.nameIngredient);
    }
  }

  public handleImageError(event: Event): void {
    this.imageHandlingService.handleImageError(event);
  }

  private getIngredient(name: string): void {
    if(this.ingredientArray$) {
      const capitalizeName = this.capitalizeFirstLetter(name);
      this.ingredientArray$.subscribe(data => {
        const ingredient = data.find(ingredient => ingredient.strIngredient === capitalizeName);
        if(ingredient) {
          this.ingredient = ingredient;
          this.cdr.detectChanges();
        }
      });
    }
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
