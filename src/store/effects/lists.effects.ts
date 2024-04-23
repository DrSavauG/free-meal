import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../app/services/products.service";
import * as fromListsActions from "../actions/lists.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListsEffects {

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {
  }

  loadAreas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadAreas),
      mergeMap(() => this.httpService.getListAllAreas()
        .pipe(
          map(areas => fromListsActions.loadAreaSuccess({areas})),
          catchError(error => of(fromListsActions.loadAreaFailure({error})))
        )
      )
    )
  );
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadCategory),
      mergeMap(() => this.httpService.getListAllCategories()
        .pipe(
          map(categories => fromListsActions.loadCategorySuccess({categories})),
          catchError(error => of(fromListsActions.loadCategoryFailure({error})))
        )
      )
    )
  );
  loadIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadIngredients),
      mergeMap(() => this.httpService.getListAllIngredients()
        .pipe(
          map(ingredients => fromListsActions.loadIngredientsSuccess({ingredients})),
          catchError(error => of(fromListsActions.loadIngredientsFailure({error})))
        )
      )
    )
  );
}
