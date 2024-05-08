import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of } from "rxjs";

import { FavoritesService } from "../../app/services/favorites.service";
import * as fromFavoritesActions from "../../store/actions/favorites.actions";


@Injectable({
  providedIn: 'root'
})
export class FavoritesEffects {
  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService
  ) {
  }

  getAllFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFavoritesActions.loadAllFavorites),
      mergeMap(() => this.favoritesService.getAllFavorites$()
        .pipe(
          map(favorites => fromFavoritesActions.loadAllFavoritesSuccess({favorites})),
          catchError(error => of(fromFavoritesActions.loadAllFavoritesFailure({error})))
        )
      )
    )
  );
}
