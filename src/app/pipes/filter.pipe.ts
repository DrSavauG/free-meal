import { Pipe, PipeTransform } from '@angular/core';
import { LabelData } from "../models/mock-products";

/**
 * @name FilterPipe
 * @description
 * Фильтрует массив объектов LabelData, возвращая только те элементы, в свойстве label которых
 * присутствует указанная строка filterLetter. Фильтрация нечувствительна к регистру.
 *
 * @example
 * <div *ngFor="let data of dataArray | filter:'apple'">
 *   {{ data.label }}
 * </div>
 *
 * @param array Массив объектов LabelData или null, который будет фильтроваться.
 * @param filterLetter Строка для поиска в свойстве label каждого объекта из массива.
 *                     Если filterLetter равно null или пусто, фильтрация не производится.
 *
 * @returns Возвращает новый массив LabelData, содержащий только те элементы,
 *          в label которых содержится строка filterLetter. Если filterLetter или array равны null,
 *          возвращает исходный массив или null.
 */
@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(array: LabelData[] | null, filterLetter: string | null): LabelData[] | null {
    if(!array || !filterLetter) {
      return array;
    }
    const lowerCaseLetter = filterLetter.toLowerCase().trim();
    return array.filter(labelData => labelData.label.toLowerCase().includes(lowerCaseLetter));
  }
}
