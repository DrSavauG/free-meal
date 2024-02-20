import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from "rxjs";
import {  StrCategory } from "../models/mock-products";

@Pipe({
  name: 'filter',
  standalone: true
})

export class FilterPipe implements PipeTransform {

  transform(array$: Observable<StrCategory[]> | null, filterLetter: string | null): Observable<StrCategory[]> | null {
    if(array$ && filterLetter) {
      const loverCaseLetter = filterLetter.toLowerCase().trim();
      if(loverCaseLetter) {
        console.log('loverCaseLetter', loverCaseLetter);

        return array$.pipe(
          map(arr => arr.filter(
            strCategory => (strCategory["strCategory"]).toLowerCase().includes(loverCaseLetter))),
        );
      }
    }
    return array$;
  }
}
