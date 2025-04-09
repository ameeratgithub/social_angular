import { Pipe, PipeTransform } from '@angular/core';
import { Time } from '@angular/common';

@Pipe({
  name: 'absoluteTime'
})
export class AbsoluteTimePipe implements PipeTransform {

  transform(value: Time, args?: any): any {
    const medium = value.hours + ':' + value.minutes;
    const long = medium + this._12HrFormate(value);
    if (args === 'medium') {
      return medium;
    }
    return long;
  }
  _12HrFormate(time: Time) {
    return ' ' + (time.hours > 12) ? 'pm' : 'am';
  }

}
