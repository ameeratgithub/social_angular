import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(inputDate: string): string {
    if (!inputDate) return;
    var current = new Date().valueOf();
    var input = new Date(parseInt(inputDate)).valueOf();
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerWeek = msPerDay * 7;
    // var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - input;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + 's';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + 'm';
    }

    else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + 'h';
    }

    else if (elapsed < msPerWeek) {
      return Math.round(elapsed / msPerDay) + 'd';
    }
    else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerWeek) + 'w';
    }

    // else if (elapsed < msPerYear) {
    //   return Math.round(elapsed / msPerMonth) + 'mon';
    // }

    else {
      return Math.round(elapsed / msPerYear) + 'y';
    }

  }

}
