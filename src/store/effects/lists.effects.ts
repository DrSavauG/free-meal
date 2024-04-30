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
  loadRawIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadRawIngredients),
      mergeMap(() => this.httpService.getRawListAllIngredients()
        .pipe(
          map(rawIngredients => fromListsActions.loadRawIngredientsSuccess({rawIngredients})),
          catchError(error => of(fromListsActions.loadRawIngredientsFailure({error})))
        )
      )
    )
  );

  /////////list
  // return this.httpService.getByArea(pageCategory);
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
  );//todo по имение http
  // return this.httpService.getByCategory(pageCategory);
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
  // return this.httpService.getByIngredient(pageCategory);
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
  // return this.httpService.getSearchByName(searchItems);//todo добавить
  loadMealsByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromListsActions.loadMealsByName),
      tap((action) => console.log('Action letter:', action,action.name)),  // Logging the letter from the action

      mergeMap(action => this.httpService.getSearchByName(action.name)
        .pipe(
          map(meals => fromListsActions.loadMealsByNameSuccess({meals})),
          catchError(error => of(fromListsActions.loadMealsByNameFailure({error})))
        )
      )
    )
  );
  // return this.httpService.getSearchByLetter(searchItems);
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
