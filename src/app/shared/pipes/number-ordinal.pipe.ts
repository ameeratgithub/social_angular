import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOrdinal'
})
export class NumberOrdinalPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const Ordinals = ['st', 'nd', 'rd', 'th'];
    if (!value || Number.isNaN(value)) {
      return null;
    }
    if (value > 3) {
      return value + Ordinals[3];
    }
    return value + Ordinals[value - 1];
  }

}
