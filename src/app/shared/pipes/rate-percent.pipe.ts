import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratePercent',
})
export class RatePercentPipe implements PipeTransform {
  transform(input: number, args?: any): any {

    if (input) {

      const result = (input * 100).toFixed(0);

      return result + '%';
    }

    return '0%';
  }
}
