import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of } from "rxjs";

import { HttpService } from "../../app/services/products.service";

import * as fromProductActions from "../actions/products.actions";

@Injectable({
  providedIn: 'root'
})

export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {
  }

  getRandomProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProductRandom),
      mergeMap(() => this.httpService.getRandomItem()
        .pipe(
          map(product => fromProductActions.loadProductRandomSuccess({product})),
          catchError(error => of(fromProductActions.loadProductRandomFailure({error})))
        )
      )
    )
  );

  getProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProductById),
      mergeMap(action => this.httpService.getItemById(action.id)
        .pipe(
          map(product => fromProductActions.loadProductByIdSuccess({product})),
          catchError(error => of(fromProductActions.loadProductByIdFailure({error})))
        )
      )
    )
  );
}

