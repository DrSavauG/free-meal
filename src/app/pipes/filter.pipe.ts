import { Pipe, PipeTransform } from '@angular/core';
import { filter, map, Observable } from "rxjs";
import { LabelData} from "../models/mock-products";

@Pipe({
  name: 'filter',
  standalone: true
})

export class FilterPipe implements PipeTransform {
  transform(array$: Observable<LabelData[]> | null, filterLetter: string | null): Observable<LabelData[]> | null {
    if(!array$ || !filterLetter) {
      return array$;
    }
    const lowerCaseLetter = filterLetter.toLowerCase().trim();

    return array$.pipe(
      filter(arr => arr !== null),
      map(arr => arr.filter(labelData => labelData.label.toLowerCase().includes(lowerCaseLetter)))
    );
  }
}

