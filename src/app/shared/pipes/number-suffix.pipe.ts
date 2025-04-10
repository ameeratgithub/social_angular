import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const suffixes = ['k', 'm'];
    args = args || 1;
    let exp;
    if (Number.isNaN(value)) {
      return null;
    }
    if (value < 1000) {
      return value;
    }
    exp = Math.floor(Math.log(value) / Math.log(1000));
    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}
