import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class AbsoluteDatePipe implements PipeTransform {

  transform(input: string, args?: any): string {

    if (!input || !input.trim()) return;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current = new Date();
    let inputDate = new Date(parseInt(input));
    let currentYear = current.getFullYear();
    let inputYear = inputDate.getFullYear();
    let output = months[inputDate.getMonth()] + " " + inputDate.getDate();
    if (inputYear < currentYear) {
      return output+ ", "+inputDate.getFullYear();
    }
    return output;
  }

}
