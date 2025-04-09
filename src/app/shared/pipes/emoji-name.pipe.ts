import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiName'
})
export class EmojiNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value ? value.replace(new RegExp(':', 'g'), '') + ".png" : '';
  }

}
