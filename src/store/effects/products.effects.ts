import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap, of } from "rxjs";

import * as ProductActions from "../actions/products.actions";
import { HttpService } from "../../app/services/products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsEffects {
  getRandomProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductRandom),
      mergeMap(() =>
        this.httpService.getRandomItem().pipe(
          map(product => ProductActions.getProductRandomSuccess({product})),
          catchError(error => of(ProductActions.getProductRandomFailure({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) {
  }
}
