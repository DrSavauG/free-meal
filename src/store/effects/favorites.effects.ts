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
  deleteFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFavoritesActions.deleteFromFavorites),
      mergeMap((action) =>
        this.favoritesService.deleteFavorite$(action.id)
          .pipe(
            map(() => fromFavoritesActions.deleteFromFavoritesSuccess()),
            catchError(error => of(fromFavoritesActions.deleteFromFavoritesFailure({error})))
          )
      )
    )
  );

  setFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFavoritesActions.addToFavorites),
      mergeMap((action) =>
        this.favoritesService.setFavorite$(action.product).pipe(
          map(() => fromFavoritesActions.addToFavoritesSuccess()),
          catchError(error => of(fromFavoritesActions.addToFavoritesFailure({ error })))
        )
      )
    )
  );

}
