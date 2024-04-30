import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../app/services/products.service";
import * as fromListsActions from "../actions/lists.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";

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

  loadListByArea$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadListByArea),
      mergeMap(action => this.httpService.getByArea(action.category)
        .pipe(
          map(list => fromListsActions.loadListByAreaSuccess({list})),
          catchError(error => of(fromListsActions.loadListByAreaFailure({error})))
        )
      )
    )
  );

  loadListByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadListByCategory),
      mergeMap(action => this.httpService.getByCategory(action.category)
        .pipe(
          map(list => fromListsActions.loadListByCategorySuccess({list})),
          catchError(error => of(fromListsActions.loadListByCategoryFailure({error})))
        )
      )
    )
  );

  loadListByIngredient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadListByIngredient),
      mergeMap(action => this.httpService.getByIngredient(action.category)
        .pipe(
          map(list => fromListsActions.loadListByIngredientSuccess({list})),
          catchError(error => of(fromListsActions.loadListByIngredientFailure({error})))
        )
      )
    )
  );

  loadMealsByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadMealsByName),
      tap((action) => console.log('Action letter:', action, action.name)),  // Logging the letter from the action

      mergeMap(action => this.httpService.getSearchByName(action.name)
        .pipe(
          map(meals => fromListsActions.loadMealsByNameSuccess({meals})),
          catchError(error => of(fromListsActions.loadMealsByNameFailure({error})))
        )
      )
    )
  );

  loadMealsByLetter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadMealsByLetter),
      mergeMap(({letter}) => this.httpService.getSearchByLetter(letter)
        .pipe(
          map(meals => fromListsActions.loadMealsByLetterSuccess({meals})),
          catchError(error => of(fromListsActions.loadMealsByLetterFailure({error})))
        )
      )
    )
  );

}
