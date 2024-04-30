import { HttpService } from "../../app/services/products.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of } from "rxjs";
import { loadRawIngredients, loadRawIngredientsFailure, loadRawIngredientsSuccess } from "../actions/ingredients.actions";

@Injectable({
  providedIn: 'root'
})

export class IngredientsEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {
  }

  loadRawIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRawIngredients),
      mergeMap(() => this.httpService.getRawListAllIngredients()
        .pipe(
          map(rawIngredients => loadRawIngredientsSuccess({rawIngredients})),
          catchError(error => of(loadRawIngredientsFailure({error})))
        )
      )
    )
  );
}
