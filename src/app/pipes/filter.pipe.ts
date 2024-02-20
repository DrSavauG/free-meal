import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from "rxjs";
import { StrArea, StrCategory, StrIngredient } from "../models/mock-products";

@Pipe({
  name: 'filter',
  standalone: true
})

export class FilterPipe implements PipeTransform {
  private readonly strCategory = 'strCategory';
  private readonly strArea = 'strArea';
  private readonly StrIngredient = 'StrIngredient';

  transform(array$: Observable<StrCategory[] | StrArea[] | StrIngredient[]> | null, filterLetter: string | null): Observable<StrCategory[] | StrArea[] | StrIngredient[]> | null {
    if(array$ && filterLetter) {
      const loverCaseLetter = filterLetter.toLowerCase().trim();
      if(loverCaseLetter) {
        if(this.isStrCategory(array$)) {
          return this.filterStrCategory(array$, loverCaseLetter);
        }

        if(this.isStrArea(array$)) {
          return this.filterStrArea(array$, loverCaseLetter);
        }

         if(this.isStrIngredient(array$)) {
          return this.filterStrIngredient(array$, loverCaseLetter);
        }

        return array$;
      }
      return array$;
    }
    return null;
  }

  private filterStrCategory(array$: Observable<StrCategory[]>, letter: string) {
    return array$.pipe(
      map(arr => arr.filter(
        objProduct => objProduct.strCategory.toLowerCase().includes(letter))),
    );
  }




  private filterStrArea(array$: Observable<StrArea[]>, letter: string) {
    return array$.pipe(
      map(arr => arr.filter(
        objProduct => objProduct.strArea.toLowerCase().includes(letter))),
    );
  }

  private filterStrIngredient(array$: Observable<StrIngredient[]>, letter: string) {
    return array$.pipe(
      map(arr => arr.filter(
        objProduct => objProduct.strIngredient.toLowerCase().includes(letter))),
    );
  }

  private A<T>(arr:T[], field: keyof T, filStr: string) {
    const s = arr[0][field] === filStr;
  }
  // private mapO(arr: StrCategory[]): {label: string, data: T}{
  //   return arr.map((el) => ({
  //     label: el.strCategory,
  //     data: el
  //   }))
  // }

  isStrCategory(entity: Observable<StrCategory[] | StrArea[] | StrIngredient[]>): entity is Observable<StrCategory[]> {
    return this.strCategory in entity.pipe(
      map(el => el.map(el => this.strCategory in el))
    );
  }

  private isStrArea(entity: Observable<StrCategory[] | StrArea[] | StrIngredient[]>): entity is Observable<StrArea[]> {
    return this.strArea in entity.pipe(
      map(el => el.map(el => this.strArea in el))
    );
  }

  private isStrIngredient(entity: Observable<StrCategory[] | StrArea[] | StrIngredient[]>): entity is Observable<StrIngredient[]> {
    return this.StrIngredient in entity.pipe(
      map(el => el.map(el => this.strArea in el))
    );
  }

}

