import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullDisplay',
})
export class NullDisplayFormatPipe implements PipeTransform {
  transform(input: string): any {
    if (input && input.length > 0) {
      return input;
    }
    return '-';
  }
}
