import { Pipe, PipeTransform } from '@angular/core';
import { LabelData } from "../models/mock-products";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(array: LabelData[] | null, filterLetter: string | null): LabelData[] | null {
    // Проверяем наличие входных данных
    if (!array || !filterLetter) {
      return array; // Возвращаем входной массив, если нет данных для фильтрации или самого фильтра
    }
    const lowerCaseLetter = filterLetter.toLowerCase().trim();

    // Фильтрация массива с проверкой включения строки фильтра в каждый label элемента массива
    return array.filter(labelData => labelData.label.toLowerCase().includes(lowerCaseLetter));
  }
}
