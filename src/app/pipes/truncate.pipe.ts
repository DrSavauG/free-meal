import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 27, completeWords = true, ellipsis = '...'): string {

    if(value.length <= limit) {
      return value;
    }

    if(completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    const truncatedString = value.substring(0, limit);
    return truncatedString + (value[limit] === ' ' || completeWords ? '' : ellipsis);
  }
}
